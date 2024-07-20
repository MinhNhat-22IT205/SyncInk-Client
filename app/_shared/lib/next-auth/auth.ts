import NextAuth from "next-auth";

import { authConfig } from "./auth.config";
import { credentialProvider } from "./auth.providers";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  //add custom credentials here
  providers: [credentialProvider],
});
