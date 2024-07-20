/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  secret: "my-secret",
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    //used in middleware to check if a user is authorized to access a page
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnOtherRoutes = !nextUrl.pathname.startsWith("/auth");
      if (isOnOtherRoutes) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/home", nextUrl));
      }
      return true;
    },

    //trigged when a user signs in
    //token: current JWT token
    //user: user object returned from the authorize function in the provider
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day
  },
  providers: [],
} satisfies NextAuthConfig;
