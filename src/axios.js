import axios from "axios";

// Create axios instance with base URL that's always HTTPS
const baseURL = import.meta.env.VITE_API_BASE_URL || "";
const instance = axios.create({ baseURL });
export default instance;
