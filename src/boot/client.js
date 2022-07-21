import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.request.use((config) => {
  return config;
});

client.interceptors.response.use((config) => {
  return config;
});

export default client;
