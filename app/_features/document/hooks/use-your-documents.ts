"use client";
import useSWR from "swr";

import { fetcher } from "@/app/_shared/lib/axios/fetcher";

import { DocumentType } from "../types/document-schema.type";

export const useYourDocuments = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<
    DocumentType[]
  >("/documents/your-documents", fetcher, { suspense: true });

  return { documents: data, error, isLoading, isValidating, mutate };
};
