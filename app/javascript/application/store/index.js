import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import auth from './modules/auth';
import users from './modules/users'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    auth,
    users,
  }
});

export default store;
