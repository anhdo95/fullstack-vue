const getters = {
  products: (state) => state.products,
  productFromId: (state) => (id) => state.products.find(product => product.id === id)
}

export default getters