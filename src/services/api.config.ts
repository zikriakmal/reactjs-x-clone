// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseUrl = 'http://localhost:8080'

const guardApi = axios.create({baseURL: baseUrl});
const publicApi = axios.create({baseURL: baseUrl});

guardApi.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('access_token');
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
