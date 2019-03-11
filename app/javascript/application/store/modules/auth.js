import jwtDecode from 'jwt-decode';

import instance from '../instance';
import {
  mutationTypes as usersMutations,
} from './users';

const endpoints = {
  CREATE: '/sign_in',
};

export const actionTypes = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
};

export const mutationTypes = {
  SET_JWT: 'SET_JWT',
  SET_IS_LOGGED_IN: 'SET_IS_LOGGED_IN',
  CLEAR_JWT: 'CLEAR_JWT',
};

function decodeJWT(token) {
  let payload = jwtDecode(token);
  delete payload.exp;

  return payload;
}

export default {
  namespaced: true,

  state: {
    isLoggedIn: !!localStorage.getItem('jwt'),
  },

  actions: {
    [actionTypes.SIGN_IN]({ commit }, { credentials }) {
      return instance.post(endpoints.CREATE, credentials)
        .then(({ data }) => {
          commit(mutationTypes.SET_JWT, data.token);
          commit(mutationTypes.SET_IS_LOGGED_IN, true);
          commit(`users/${usersMutations.SET_USER}`, { user: decodeJWT(data.token) }, { root: true });

          return Promise.resolve();
        });
    },

    [actionTypes.SIGN_OUT]({ commit }) {
      commit(mutationTypes.SET_IS_LOGGED_IN, false);
      commit(mutationTypes.CLEAR_JWT);
      return Promise.resolve();
    },
  },

  mutations: {
    [mutationTypes.SET_JWT](state, jwt) {
      localStorage.setItem('jwt', jwt);
    },

    [mutationTypes.SET_IS_LOGGED_IN](state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },

    [mutationTypes.CLEAR_JWT]() {
      localStorage.removeItem('jwt');
    },
  },
};
