<template>
  <div id="products" class="box">
    <div class="products--header has-text-centered">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <ProductListItem v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="product-count has-text-right">
      <span class="has-text-weight-bold"># of products: 4</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductListItem from '@/components/ProductListItem'

export default {
  name: 'ProductList',
  components: {
    ProductListItem
  },
  computed: {
    ...mapGetters({
    products: 'product/products',
    }),
  },
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}

.products--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}
</style>
