import { setAuthToken } from "../lib/axios/axios.base";
import { auth } from "../lib/next-auth/auth";
import { convertToCorrectSessionUser } from "../utils/convert-to-correct-session-user";

export const useAuth = async () => {
  // const { data, status } = useSession();
  // console.log("session " + data + status);

  // if (status !== "loading") {
  //   if (status === "authenticated") {
  //     setAuthToken(data.user.accessToken);
  //   } else if (status === "unauthenticated") {
  //     setAuthToken("");
  //   }
  // }
  const session = await auth();
  if (session?.user) {
    if (session.user.accessToken) {
      setAuthToken(session.user.accessToken);
    } else {
      setAuthToken("");
    }
  }

  return {
    user: convertToCorrectSessionUser(session?.user),
    // loading: status === "loading",
    // isAuth: status === "authenticated",
  };
};
