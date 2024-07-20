import axios from "axios";

const http = axios.create({
  baseURL: process.env.AXIOS_BASE_URL,
});

const setAuthToken = (token: string | null) => {
  if (token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};
export { http, setAuthToken };
