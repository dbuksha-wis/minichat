import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthIndex from './views/Auth';
import Chat from './views/Chat'

Vue.use(VueRouter);

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
      name: 'ChatPage',
      component: Chat,
      meta: { pageTitle: 'Home' },
    },
  ]
});

export default router;
