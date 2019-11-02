import Vue from 'vue'
import Vuex from 'vuex'

import productModule from './modules/cart'
import cartModule from './modules/product'

Vue.use(Vuex)


export default new Vuex.Store({
  namespaced: true,
  modules: {
    productModule,
    cartModule
  }
})