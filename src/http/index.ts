import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const APLICATION_URL = process.env.NEXT_PUBLIC_APLICATION_URL;
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest.isRetry = true;
    }
    return Promise.reject(error);
  }
);
export default $api;
