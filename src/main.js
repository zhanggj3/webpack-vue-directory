import Vue from 'vue';
import App from './App';
import router from 'vue-router';

import './assets/css/public.css';
import './assets/less/public.less';

import glo from './front-config.js'; //生产测试配置
import axios from 'axios';   //axios的请求

Vue.prototype.$axios = axios;   //$axios全局定义  通过this.$axios请求
Vue.prototype.$purchaserList = glo.purchaserList; //采购商渠道数据
if(process.env.NODE_ENV == "production"){
	axios.defaults.baseURL = glo.url;  //线上环境
	Vue.prototype.$baseURL = glo.url;
}else{
	axios.defaults.baseURL = '/api';  //开发环境
	Vue.prototype.$baseURL = '/api';
}

Vue.config.debug = true;//开启错误提示

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})