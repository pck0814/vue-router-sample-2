import Vue from 'vue'
import store from './store.js'
import router from './router.js'
import App from './App.vue'

new Vue({
  el: '#app',
  store, // 애플리케이션에 등록
  router,
  render: h => h(App)
  // ...
})