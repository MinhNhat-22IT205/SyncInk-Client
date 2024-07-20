import { Session } from "next-auth";

import { EndUserType } from "../types/endUser-schema.type";

type SessionUser = {
  accessToken: string;
} & EndUserType;
export const convertToCorrectSessionUser = (
  user: Session["user"] | undefined,
): SessionUser | null => {
  if (!user) return null;
  return {
    accessToken: user.accessToken,
    ...user.endUser,
  };
};
