import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthIndex from './views/Auth';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/sign-in',
      name: 'Auth',
      component: AuthIndex,
    },
  ]
});

export default router;
