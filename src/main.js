import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueFroala from 'vue-froala-wysiwyg'
import axios from 'axios';
import VueAxios from 'vue-axios';
import vueMoment from 'vue-moment';



import router from './router'
import store from './store/'

Vue.config.productionTip = false
Vue.use(ElementUI); // 完成引用
Vue.use(VueAxios, axios);
Vue.use(vueMoment); 
// Vue.use(VueFroala)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
