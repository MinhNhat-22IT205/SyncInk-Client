"use server";
import { AuthError } from "next-auth";

import { signIn } from "./auth";

export async function login(credentials: { email: string; password: string }) {
  try {
    const res = await signIn("credentials", {
      ...credentials,
      redirect: false,
    });
    return res;
  } catch (error) {
    if (error instanceof AuthError) {
      let errorMessage = "";
      switch (error.cause?.err?.name) {
        case "credentials":
          errorMessage = "Invalid credentials.";
          break;
        case "AxiosError":
          errorMessage =
            // @ts-expect-error AxiosError type is gross
            "Axios Error: " + error.cause?.err?.response?.data.message;
          break;
        default:
          errorMessage =
            error.cause?.err?.name + ": Something went wrong. " + error.message;
          break;
      }
      throw new Error(errorMessage);
    }
    throw error;
  }
}
