// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-m-button/dist/css/default.css';
import ElementUI from 'element-ui';
import VueSweetAlert from 'vue-sweetalert';
import VueResource from 'vue-resource';
import MButton from 'vue-m-button';
import Vue from 'vue';
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(MButton);
Vue.use(VueSweetAlert);
Vue.use(ElementUI);
Vue.prototype.setCookie = (cName, value, expiredays) => {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = `${cName}=${escape(value)}${(expiredays == null) ? '' : `;expires=${exdate.toGMTString()}`}`;
};
// 获取cookie、
function getCookie(name) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr != null) {
    return (arr[2]);
  }
  return null;
}

Vue.prototype.getCookie = getCookie;
// 删除cookie
Vue.prototype.delCookie = (name) => {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null) { document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`; }
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
