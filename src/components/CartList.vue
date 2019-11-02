<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <ul>
      <CartListItem v-for="cartItem in cartItems"
        :key="cartItem.id"
        :cartItem="cartItem"
      />
      <div class="cart-details">
        <p>Total Quantity: <span class="has-text-weight-bold">{{ cartTotalQuantity }}</span></p>
        <p class="cart-remove-all--text" @click="emptyCart">
          <i class="fa fa-trash"></i>Remove all
        </p>
      </div>
    </ul>
    <button class="button is-primary">
      Checkout (<span class="has-text-weight-bold">{{ cartTotalPrice }}$</span>)
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  created() {
    this.getCartItems()
  },
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      cartTotalPrice: 'cartTotalPrice',
      cartTotalQuantity: 'cartTotalQuantity',
    })
  },
  methods: {
    ...mapActions({
      getCartItems: 'getCartItems',
      emptyCart: 'emptyCart'
    }),
  }
}
</script>

<style scoped>
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-item--modify {
  cursor: pointer;
  margin: 0 1px;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa {
  padding-right: 5px;
}
</style>
