import axios from 'axios';
import { Jsona } from 'jsona';

const dataFormatter = new Jsona();

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${window.localStorage.getItem('accessToken')}`;
  return config;
});


// deserialize data
instance.interceptors.response.use(
  (response) => {
    const r = {
      ...response,
      pureData: response.data,
      data: dataFormatter.deserialize(response.data) || {},
    };
    if (response.data.meta) {
      r.data.meta = response.data.meta;
    }
    return r;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
