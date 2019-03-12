import instance from '../instance';

const endpoints = {
  SIGN_UP: '/sign_up',
  SIGN_IN: '/sign_in',
  CURRENT_USER: '/current_user'
};

export const actionTypes = {
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  GET_CURRENT_USER: 'GET_CURRENT_USER',
};

export const mutationTypes = {
  SET_JWT: 'SET_JWT',
  SET_IS_LOGGED_IN: 'SET_IS_LOGGED_IN',
  CLEAR_JWT: 'CLEAR_JWT',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export default {
  namespaced: true,

  state: {
    isLoggedIn: !!localStorage.getItem('accessToken'),
    currentUser: null,
  },

  getters: {
    loggedIn(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    [actionTypes.SIGN_UP]({ dispatch, commit }, { user }) {
      return instance.post(endpoints.SIGN_UP, { user })
        .then(({ data }) => {
          commit(mutationTypes.SET_JWT, data.token);
          commit(mutationTypes.SET_IS_LOGGED_IN, true);
          dispatch(actionTypes.GET_CURRENT_USER);

          return Promise.resolve();
        })
        .catch(error => {
          return Promise.reject(error);
        });
    },
    [actionTypes.SIGN_IN]({ dispatch, commit }, { credentials }) {
      return instance.post(endpoints.SIGN_IN, credentials)
        .then(({ data }) => {
          commit(mutationTypes.SET_JWT, data.token);
          commit(mutationTypes.SET_IS_LOGGED_IN, true);
          dispatch(actionTypes.GET_CURRENT_USER);

          return Promise.resolve();
        })
        .catch(error => {
          return Promise.reject(error);
        })
    },

    [actionTypes.SIGN_OUT]({ commit }) {
      commit(mutationTypes.SET_IS_LOGGED_IN, false);
      commit(mutationTypes.CLEAR_JWT);
      return Promise.resolve();
    },
    [actionTypes.GET_CURRENT_USER]({ dispatch, commit }) {
      return instance.get(endpoints.CURRENT_USER)
        .then(({ data }) => {
          commit(mutationTypes.SET_CURRENT_USER, data);
          return Promise.resolve();
        })
        .catch(error => {
          commit(mutationTypes.SET_CURRENT_USER, null);
          return Promise.reject(error);
        });
    }
  },

  mutations: {
    [mutationTypes.SET_JWT](state, token) {
      localStorage.setItem('accessToken', token);
    },

    [mutationTypes.SET_IS_LOGGED_IN](state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },

    [mutationTypes.CLEAR_JWT]() {
      localStorage.removeItem('accessToken');
    },
    [mutationTypes.SET_CURRENT_USER](state, user) {
      state.currentUser = user;
    }
  },
};
