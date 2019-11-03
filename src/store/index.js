import Vue from 'vue'
import Vuex from 'vuex'

import product from './modules/product'
import cart from './modules/cart'
import inquiry from './modules/inquiry'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    cart,
    inquiry,
    auth
  }
})