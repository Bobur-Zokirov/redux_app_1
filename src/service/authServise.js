import axios from "./api";

const AuthService = {
  userRegister(user) {
    const response = axios.post("/users", { user });
    return response;
  },
  userLogin(user) {
    const response = axios.post("/users/login", { user });
    return response;
  },
  getUser() {
    const response = axios.get("/user");
    return response;
  },
};

export default AuthService;
