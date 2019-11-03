<template>
  <div class="product-list--item">
    <div>
      <h2 class="has-text-weight-bold">
        <RouterLink :to="`/products/${product.id}`">{{ product.title }}</RouterLink>
        <span class="tag is-primary is-pulled-right has-text-white">Add to Cart</span>
      </h2>
      <p>
        {{ product.description }}
      </p>
      <span class="has-text-primary has-text-weight-bold">
        <i class="fa fa-usd"></i> {{ product.price }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.product-list--item {
  padding: 10px 0;
}
</style>
