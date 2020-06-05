import Vue from 'vue'
import App from '@/pages/app/App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
Vue.prototype.$globalStore = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
