// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from '../src/components/goods/goods';
Vue.use(VueRouter);
var routes = [
  {
    path: '/',
    redirect: '/goods'
  }
];
var router = new VueRouter({
  linkActiveClass: 'active',
    routes
  });
  /eslint-disable no-new/;
  new Vue({
  el: '#app',
  router,
  render: h => h(App)
  });
