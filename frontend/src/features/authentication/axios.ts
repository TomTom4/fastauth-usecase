import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_FASTAUTH_BASE_URL,
  timeout: 15000,
});

export default axiosInstance;
