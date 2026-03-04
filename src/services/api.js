import axios from 'axios';

const api = axios.create({
  baseURL: '/',
  timeout: 5000,
});

// In this mock-first app we'll use services that read local JSON.
export default api;
