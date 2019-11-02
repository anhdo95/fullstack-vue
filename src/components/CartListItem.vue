<template>
  <li class="cart-item">
    <div>
      <p class="cart-item--title is-inline">{{ cartItem.title }}</p>
      <div class="is-pulled-right">
        <i class="fa fa-arrow-circle-up cart-item--modify" @click="addToCart({ cartItem })"></i>
        <i class="fa fa-arrow-circle-down cart-item--modify" @click="removeFromCart({ cartItem })"></i>
      </div>
      <div class="cart-item--content">
        <span class="cart-item--price has-text-primary has-text-weight-bold">{{ cartItem.price }}$ each</span>
        <span class="cart-item--quantity has-text-grey is-pulled-right">Quantity: {{ cartItem.quantity }}</span>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "CartListItem",
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      addToCart: 'addToCart',
      removeFromCart: 'removeFromCart',
    }),
  }
}
</script>

<style scoped>
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
