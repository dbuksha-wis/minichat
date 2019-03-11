import instance from '../instance';

const endpoints = {
  INDEX: '/messages',
};

export const actionTypes = {
  INDEX: 'INDEX',
};

export default {
  namespaced: true,
  state: {},
  actions: {
    [actionTypes.INDEX]({ commit }) {
      return instance.get(endpoints.INDEX)
        .then(({ data }) => {
          return Promise.resolve(data);
        });
    },
  },
};
