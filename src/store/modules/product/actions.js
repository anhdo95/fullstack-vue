import axios from 'axios'

export default {
  async getProducts({ commit }) {
    const res = await axios.get('/api/products')
    commit('UPDATE_PRODUCT_ITEMS', { products: res.data })
  }
}