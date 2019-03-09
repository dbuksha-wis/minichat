import axios from 'axios';
import { Toast } from 'buefy';
import { Jsona } from 'jsona';

const dataFormatter = new Jsona();

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${window.localStorage.getItem('jwt')}`;
  return config;
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      store.commit('auth/SET_IS_LOGGED_IN', false);
      store.commit('auth/CLEAR_JWT');
      Toast.open({
              message: 'Authorization required.',
              type: 'is-danger',
            });
      router.push({ name: 'Auth' });
    }
    return Promise.reject(error);
  },
);

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
