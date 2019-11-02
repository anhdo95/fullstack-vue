import { UPDATE_PRODUCT_ITEMS } from './mutation-types'

export default {
  [UPDATE_PRODUCT_ITEMS] (state, { products }) {
    state.products = products
  }
}