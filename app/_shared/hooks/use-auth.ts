"use client";
import { Session } from "next-auth";
import { useEffect, useState } from "react";

import { setAuthToken } from "../lib/axios/axios.base";
import { getSession } from "../lib/next-auth/get-auth-action";
import { convertToCorrectSessionUser } from "../utils/convert-to-correct-session-user";

export const useAuth = () => {
  const [user, setUser] = useState<Session["user"] | null>(null);

  useEffect(() => {
    const retrieveUserAndToken = async () => {
      const session = await getSession();
      setUser(session?.user ?? null);

      if (session?.user) {
        if (session.user.accessToken) {
          setAuthToken(session.user.accessToken);
        } else {
          setAuthToken("");
        }
      }
    };
    retrieveUserAndToken();
  }, []);

  return {
    user: user ? convertToCorrectSessionUser(user) : null,
  };
};
