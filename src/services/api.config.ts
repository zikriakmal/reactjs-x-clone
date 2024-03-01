// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL

const guardApi = axios.create({baseURL: baseUrl});
const publicApi = axios.create({baseURL: baseUrl});

guardApi.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export {guardApi, publicApi};
