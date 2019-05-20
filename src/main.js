import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueFroala from 'vue-froala-wysiwyg'

import router from './router'
import store from './store/'

Vue.config.productionTip = false
Vue.use(ElementUI); // 完成引用
// Vue.use(VueFroala)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
