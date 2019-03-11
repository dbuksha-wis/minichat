/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import ActionCableVue from 'actioncable-vue';
import Buefy from 'buefy';
import Vue from 'vue'

import App from '../application/App.vue'
import 'buefy/dist/buefy.css'
import router from '../application/router';
import store from '../application/store';

// VUE USE PACKAGES

Vue.use(ActionCableVue, {
  debug: true,
  debugLevel: 'error',
  connectImmediately: false,
});
Vue.use(Buefy);

// INITIALIZE VUE APP

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'));
  const app = new Vue({
    el,
    router,
    store,
    render: h => h(App)
  });
});
