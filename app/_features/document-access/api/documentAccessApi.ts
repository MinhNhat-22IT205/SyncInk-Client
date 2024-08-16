import { http } from "@/app/_shared/lib/axios/axios.base";

import { DocumentAccessType } from "../types/document-access-schema.type";

const documentAccessEndpoint = "/document-access";

type AddDocumentAccessProps = {
  documentId: string;
  endUserId: string;
  documentRole: DocumentAccessType["role"];
};
type UpdateDocumentAccessProps = {
  documentAccessId: string;
  documentRole: DocumentAccessType["role"];
};

export const addDocumentAccess = async ({
  documentId,
  endUserId,
  documentRole,
}: AddDocumentAccessProps) => {
  const response = await http.post(documentAccessEndpoint, {
    documentId,
    endUserId,
    documentRole,
  });
  return response.data;
};

export const updateDocumentAccess = async ({
  documentAccessId,
  documentRole,
}: UpdateDocumentAccessProps) => {
  const response = await http.patch(
    `${documentAccessEndpoint}/${documentAccessId}`,
    {
      documentRole,
    },
  );
  return response.data;
};

export const deleteDocumentAccess = async ({
  documentAccessId,
}: Pick<UpdateDocumentAccessProps, "documentAccessId">) => {
  const response = await http.delete(
    `${documentAccessEndpoint}/${documentAccessId}`,
  );
  return response.data;
};
