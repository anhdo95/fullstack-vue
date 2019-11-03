import axios from 'axios'
import { UPDATE_PRODUCT_ITEMS } from './mutation-types'

export default {
  async getProducts({ commit }) {
    const res = await axios.get('/api/products?token=D6W69PRgCoDKgHZGJmRUNA')
    commit(UPDATE_PRODUCT_ITEMS, { products: res.data })
  }
}