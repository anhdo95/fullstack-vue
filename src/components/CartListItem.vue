<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">
        <RouterLink :to="{ name: 'product-detail', params: { id: cartItem.id } }">
          {{ cartItem.title }}
        </RouterLink>
      </p>
      <div>
        <span
          class="cart-item--price has-text-primary has-text-weight-bold"
        >{{ cartItem.price }}$ x {{ cartItem.quantity }}</span>
        <span>
          <i @click="addToCart({ cartItem })" class="fa fa-arrow-circle-up cart-item__modify"></i>
          <i
            @click="removeFromCart({ cartItem })"
            class="fa fa-arrow-circle-down cart-item__modify"
          ></i>
        </span>
      </div>
    </div>
    <div class="cart-item__image">
      <img
        :src="require(`@/assets/${cartItem.image_tag}`)"
        :alt="cartItem.title"
        :title="cartItem.title"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
      addToCart: "addToCart",
      removeFromCart: "removeFromCart"
    })
  }
};
</script>

<style scoped>
.box {
  height: 90px;
  padding: 10px;
}

.cart-item__details {
  float: left;
  width: 250px;
  padding: 10px;
}

.cart-item__image img {
  float: right;
  height: 70px;
}

.cart-item__modify {
  cursor: pointer;
  margin: 0 1px;
}
</style>
