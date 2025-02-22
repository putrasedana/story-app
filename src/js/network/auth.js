import axios from "axios";
import ApiEndpoint from "../config/api-endpoint";

const axiosInstance = axios.create({
  baseURL: ApiEndpoint.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const Auth = {
  async register({ name, email, password }) {
    const response = await axiosInstance.post(ApiEndpoint.REGISTER, {
      name,
      email,
      password,
    });
    return response.data;
  },

  async login({ email, password }) {
    const response = await axiosInstance.post(ApiEndpoint.LOGIN, {
      email,
      password,
    });
    return response.data;
  },
};

export default Auth;
