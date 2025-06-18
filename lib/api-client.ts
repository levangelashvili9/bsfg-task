import axios from "axios";
import cookies from "js-cookie";

const locale = cookies.get("NEXT_LOCALE") || "en";

import { useAccessTokenStore } from "@/features/auth/stores/access-token";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Accept-Language": locale,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAccessTokenStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
