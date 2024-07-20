import Credentials from "next-auth/providers/credentials";

import { http } from "../axios/axios.base";

export const credentialProvider = Credentials({
  name: "Credentials",
  authorize: async (credentials) => {
    // Authenticate user with credentials
    const res = await http.post("/auth/login", {
      password: credentials.password,
      email: credentials.email,
    });
    if (res.data.accessToken) {
      // Any object returned will be saved in `user` property of the JWT
      return res.data;
    }
    return null;
  },
});
