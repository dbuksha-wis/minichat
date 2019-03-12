import instance from '../instance';

const endpoints = {
  INDEX: '/messages',
  CREATE: '/messages'
};

export const actionTypes = {
  INDEX: 'INDEX',
  CREATE: 'CREATE',
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
    [actionTypes.CREATE]({ commit }, { message, room }) {
      return instance.post(endpoints.CREATE, { message, room })
        .then(({ data }) => {
          return Promise.resolve(data);
        })
        .catch(error => {
          return Promise.reject(error);
        })
    },
  },
};
