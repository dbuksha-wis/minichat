import Vue from 'vue';
import Vuex from 'vuex';

import instance from './instance';
import router from '../router';

// Modules
import auth from './modules/auth';
import chatMessages from './modules/chatMessages';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    auth,
    chatMessages,
  }
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      store.commit('auth/SET_IS_LOGGED_IN', false);
      store.commit('auth/CLEAR_JWT');

      let not_auth = !router.currentRoute.matched.find(route => route.name === 'AuthIndex');
      if(not_auth) router.push({ name: 'AuthSignIn'});
    }
    return Promise.reject(error);
  },
);

export default store;
