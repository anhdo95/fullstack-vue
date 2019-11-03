import axios from 'axios'

export default {
  async getCartItems({ commit }, { token }) {
    const res = await axios.get(`/api/cart?token=${token}`)
    commit('UPDATE_CART_ITEMS', { cartItems: res.data })
  },
  async addToCart({ commit }, { cartItem, token }) {
    const res = await axios.post(`/api/cart?token=${token}`, cartItem)
    commit('UPDATE_CART_ITEMS', { cartItems: res.data })
  },
  async removeFromCart({ commit }, { cartItem, token }) {
    const res = await axios.post(`/api/cart/delete?token=${token}`, cartItem)
    commit('UPDATE_CART_ITEMS', { cartItems: res.data })
  },
  async emptyCart({ commit }, { token }) {
    const res = await axios.post(`/api/cart/delete/all?token=${token}`)
    commit('UPDATE_CART_ITEMS', { cartItems: res.data })
  }
}