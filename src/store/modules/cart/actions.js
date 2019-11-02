import axios from 'axios'

export default {
  async getCartItems({ commit }) {
    const res = await axios.get('/api/cart')
    commit('UPDATE_CART_ITEMS', { cartItems: res.data })
  },
  async addToCart({ commit }, { cartItem }) {
    const res = await axios.post('/api/cart', cartItem)
    commit('UPDATE_CART_ITEMS', { cartItems: res.data })
  },
  async removeFromCart({ commit }, { cartItem }) {
    const res = await axios.post('/api/cart/delete', cartItem)
    commit('UPDATE_CART_ITEMS', { cartItems: res.data })
  },
  async emptyCart({ commit }) {
    const res = await axios.post('/api/cart/delete/all')
    commit('UPDATE_CART_ITEMS', { cartItems: res.data })
  }
}