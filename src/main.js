import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import * as echarts from 'echarts'


 
Vue.prototype.$echarts = echarts //挂载到Vue实例上面



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
