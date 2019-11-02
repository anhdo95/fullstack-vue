import axios from 'axios'
import { UPDATE_PRODUCT_ITEMS } from './mutation-types'

export default {
  async getProducts({ commit }) {
    const res = await axios.get('/api/products')
    commit(UPDATE_PRODUCT_ITEMS, { products: res.data })
  }
}