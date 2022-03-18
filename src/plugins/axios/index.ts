import { getApiToken } from '@/helpers/apiToken';
import axios           from 'axios';

const api = axios.create({
  baseURL: 'https://cloud-dev.dolphin.ru.com/api/v1',
});

const endpoints = {
  auth: '/auth',
  signIn: '/auth/login',
};

api.interceptors.request.use(function (config) {
  if (config.headers) {
    config.headers['Authorization'] = 'Bearer ' + getApiToken();
  }
  return config;
});

export { api, endpoints };