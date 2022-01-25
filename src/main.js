import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入全局样式文件
import "./assets/less/index.less"

import store from "./store"
import router from "./router"

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
