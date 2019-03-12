import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store/index';

// import Modules
import authRoutes from './modules/auth';


import Chat from '../views/Chat'

Vue.use(VueRouter);

function checkIsLoggedIn(to, from, next) {
  if (!store.getters['auth/loggedIn']) {
    next({ name: 'AuthSignIn' });
  } else {
    next();
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Chat,
      meta: { pageTitle: 'Home' },
      beforeEnter: checkIsLoggedIn,
    },
    ...authRoutes,
  ]
});

export default router;
