/*
 * @Description: 入口文件
 * @Author: 徐长剑
 * @Date: 2019-09-27 17:33:35
 * @LastEditTime: 2019-09-29 13:58:39
 * @LastEditors: 徐长剑
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CrofyUi from '../packages/index'

// Vue.config.productionTip = false
Vue.use(CrofyUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
