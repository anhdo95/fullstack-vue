import axios from 'axios'

export default {
  state: {
    token: null,
    authLoading: false,
  },
  getters: {
    token: (state) => state.token,
    authLoading: (state) => state.authLoading,
  },
  mutations: {
    SET_TOKEN(state, { token }) {
      state.token = token
    },
    SET_AUTH_LOADING(state, isLoading) {
      state.authLoading = isLoading
    }
  },
  actions: {
    async login({ commit }/* , { username, password } */) {
      commit('SET_AUTH_LOADING', true)
      const { data } = await axios.post('/api/login')

      if (data.success) {
        commit('SET_TOKEN', { token: data.token })
        localStorage.token = data.token
        localStorage.expiryDate = new Date(new Date().getTime() + (60 * 60 * 1000)).toISOString()
      }
      commit('SET_AUTH_LOADING', false)
    },
    async logout({ commit }) {
      // await axios.post('/api/out')
      commit('SET_TOKEN', { token: null })
      localStorage.removeItem('token')
      localStorage.removeItem('expiryDate')
    }
  },
};
