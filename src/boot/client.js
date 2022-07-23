import axios from 'axios';
import { getToken } from './auth';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

client.interceptors.response.use((config) => {
  return config;
});

export default client;
