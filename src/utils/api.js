import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  /*
  timeout: 3000,
  timeoutErrorMessage: 'İstek zamanaşımına uğradı',
  */
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
