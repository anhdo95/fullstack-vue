import Vue from 'vue'
import Vuex from 'vuex'

import seedData from '@/seed.js'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    calendarDays: seedData
  },
  getters,
  mutations,
  actions,
})