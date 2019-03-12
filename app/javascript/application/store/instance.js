import axios from 'axios';

import { dataFormatter } from '../dataFormatter';

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
    let result = null;

    if (response.data) {
      result = {
        ...response,
        pureData: response.data,
        data: dataFormatter.deserialize(response.data) || {},
      };

      if (response.data.meta) result.data.meta = response.data.meta;
    } else {
      result = response;
    }

    return Promise.resolve(result);
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
