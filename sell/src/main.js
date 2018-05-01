// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from '../src/components/goods/goods';
import ratings from '../src/components/ratings/ratings';
import seller from '../src/components/seller/seller';
import '../src/common/stylus/icon.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: goods
    },
    {
      path: '/goods',
      component: goods
    }, {
      path: '/ratings',
      component: ratings
    }, {
      path: '/seller',
      component: seller
    }, {
      path: '/goback',
      redirect: '/'
    }
  ]
});
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
