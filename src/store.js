import Vue from 'vue'
import Vuex from 'vuex'
import product from './store/products.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product // 모듈을 스토어 루트에 등록
  },
  // ...
})