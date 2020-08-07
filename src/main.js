import Vue from 'vue'
import App from './App.vue'

import myUI from './packages/index'

Vue.use(myUI)     //  Vue.use 默认调用 install 方法

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
