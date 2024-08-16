import { MutatorOptions } from "swr";
import { DocumentAccessType } from "../types/document-access-schema.type";

export const addDocumentAccessOptions = (
  newAccess: Pick<
    DocumentAccessType,
    "documentId" | "endUserId" | "role" | "endUser"
  >,
): MutatorOptions => {
  return {
    // optimistic data displays until we populate cache
    // param is previous data
    optimisticData: (prevAccesses: DocumentAccessType[]) => [
      ...prevAccesses,
      newAccess,
    ],
    rollbackOnError: true,
    populateCache: (
      added: DocumentAccessType,
      prevAccesses: DocumentAccessType[],
    ) => [...prevAccesses, added],
    revalidate: false,
  };
};

export const updateDocumentAccessOptions = (
  updatedAccess: DocumentAccessType,
): MutatorOptions => {
  return {
    // optimistic data displays until we populate cache
    // param is previous data
    optimisticData: (accesses: DocumentAccessType[]) => {
      const prevAccesses = accesses.filter((todo) => {
        return todo.id !== updatedAccess.id;
      });
      return [...prevAccesses, updatedAccess];
    },
    rollbackOnError: true,
    // response from API request is 1st param
    // previous data is 2nd param
    populateCache: (
      updated: DocumentAccessType,
      prev: DocumentAccessType[],
    ) => {
      const prevAccesses = prev.filter((access) => {
        return access.id !== updatedAccess.id;
      });
      return [...prevAccesses, updated];
    },
    revalidate: false,
  };
};

export const deleteDocumentAccessOptions = ({
  id,
}: {
  id: string;
}): MutatorOptions => {
  return {
    // optimistic data displays until we populate cache
    // param is previous data
    optimisticData: (accesses: DocumentAccessType[]) => {
      return accesses.filter((access: DocumentAccessType) => {
        return access.id !== id;
      });
    },
    rollbackOnError: true,
    // response from API request is 1st param
    // previous data is 2nd param
    populateCache: (
      emptyResponseObj: object,
      accesses: DocumentAccessType[],
    ) => {
      return accesses.filter((access: DocumentAccessType) => {
        return access.id !== id;
      });
    },
    revalidate: false,
  };
};
