import axios from "axios";

export const api = axios.create({
  baseURL: 'https://habits-app-server.onrender.com'
})
