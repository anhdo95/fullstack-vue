import axios from 'axios'

export default {
  async getCartItems({ commit }) {
    const res = await axios.get('/api/cart')
    commit('UPDATE_CART_ITEMS', { cartItems: res.data })
  }
}