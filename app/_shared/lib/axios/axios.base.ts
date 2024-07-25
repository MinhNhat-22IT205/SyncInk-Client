import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/v1",
});

const setAuthToken = (token: string | null) => {
  if (token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};
export { http, setAuthToken };
