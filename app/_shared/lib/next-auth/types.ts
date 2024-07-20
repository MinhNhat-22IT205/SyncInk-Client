import DefaultUser from "next-auth";

import { EndUserType } from "../../types/endUser-schema.type";

declare module "next-auth" {
  interface Session {
    user: {
      endUser: EndUserType;
      accessToken: string;
    } & typeof DefaultUser;
  }
}
