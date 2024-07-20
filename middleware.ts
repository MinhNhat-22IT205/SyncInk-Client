import NextAuth from "next-auth";

import { authConfig } from "./app/_shared/lib/next-auth/auth.config";

//Middleware runs before cached content and routes are matched.
export default NextAuth(authConfig).auth;

export const config = {
  //all routes except..
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
