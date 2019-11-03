import axios from 'axios'
import { UPDATE_PRODUCT_ITEMS } from './mutation-types'

export default {
  async getProducts({ commit }, { token }) {
    const res = await axios.get(`/api/products?token=${token}`)
    commit(UPDATE_PRODUCT_ITEMS, { products: res.data })
  }
}