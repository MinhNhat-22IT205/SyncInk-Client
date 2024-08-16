export type DocumentType = {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  endUserId: string;
  publicAccess: AccessType;
  createdAt: Date;
  updatedAt: Date;
};
export type AccessType = "VIEWABLE" | "EDITABLE" | "RESTRICTED";
