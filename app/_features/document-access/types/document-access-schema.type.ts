import { EndUserType } from "@/app/_shared/types/endUser-schema.type";

export type DocumentAccessType = {
  id: string;
  endUser: EndUserType;
  endUserId: string;
  documentId: string;
  role: DocumentRole;
};

export type DocumentRole = "EDITOR" | "VIEWER" | "RESTRICTED";
