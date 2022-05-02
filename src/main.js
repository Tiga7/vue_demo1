// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import ElementUI from 'element-ui';
import { Container } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

// import { Button } from 'vant';
// import 'vant/lib/index.css';
//
// Vue.use(Button);

Vue.use(router);
Vue.use(ElementUI);
Vue.use(Container);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})