import axios from "axios";
import ApiEndpoint from "../config/api-endpoint";
import Utils from "../utils/utils";
import Config from "../config/config";

const axiosInstance = axios.create({
  baseURL: ApiEndpoint.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Utils.getUserToken(Config.USER_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const Stories = {
  async getAll() {
    const response = await axiosInstance.get(ApiEndpoint.GET_ALL_STORIES);
    return response.data;
  },

  async getById(id) {
    const response = await axiosInstance.get(ApiEndpoint.DETAIL_STORY(id));
    return response.data;
  },

  async store({ description, photo }) {
    const data = { description, photo };

    const response = await axiosInstance.post(ApiEndpoint.ADD_NEW_STORY, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  async update({ id, description, photo }) {
    const data = { description, photo };

    const response = await axiosInstance.put(
      ApiEndpoint.DETAIL_STORY(id),
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  },

  async destroy(id) {
    const response = await axiosInstance.delete(ApiEndpoint.DETAIL_STORY(id));
    return response.data;
  },
};

export default Stories;
