import axios from "axios";

// Create axios instance with base URL that's always HTTPS
const baseURL = import.meta.env.PROD
  ? `https://vuejobs.jpalvarado.com` // production URL
  : ""; // development URL (uses Vite proxy)

const instance = axios.create({ baseURL });

export default instance;
