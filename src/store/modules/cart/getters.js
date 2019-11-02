const getters = {
  cartItems: (state) => state.cartItems,
  cartTotalPrice: (state) => state.cartItems.reduce((sum, cart) => {
    return sum + (cart.price * cart.quantity)
  }, 0).toFixed(2),
  cartTotalQuantity: (state) => state.cartItems.reduce((sum, cart) => {
    return sum + cart.quantity
  }, 0),
}

export default getters