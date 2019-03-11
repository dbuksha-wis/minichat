import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import auth from './modules/auth';
import users from './modules/users';
import chatMessages from './modules/chatMessages';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    auth,
    users,
    chatMessages,
  }
});

export default store;
