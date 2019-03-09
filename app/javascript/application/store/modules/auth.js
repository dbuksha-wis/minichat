import instance from '../instance';

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
