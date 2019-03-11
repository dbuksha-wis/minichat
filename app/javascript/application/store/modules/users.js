export const mutationTypes = {
  SET_USER: 'SET_USER',
};

const initialUser = localStorage.getItem('user');

export default {
  namespaced: true,

  state: {
    user: initialUser ? JSON.parse(initialUser) : {},
  },

  mutations: {
    [mutationTypes.SET_USER](state, payload) {
      localStorage.setItem('user', JSON.stringify(payload.user));
      state.user = payload.user;
    },
  },
};
