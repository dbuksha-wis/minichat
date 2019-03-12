import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';

import AuthIndex from './views/Auth';
import Chat from './views/Chat'

Vue.use(VueRouter);

function checkIsLoggedIn(to, from, next) {
  if (!store.getters['auth/loggedIn']) {
    next({ name: 'Auth' });
  } else {
    next();
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/sign-in',
      name: 'Auth',
      component: AuthIndex,
    },
    {
      path: '/',
      name: 'Home',
      component: Chat,
      meta: { pageTitle: 'Home' },
      beforeEnter: checkIsLoggedIn,
    },
  ]
});

export default router;
