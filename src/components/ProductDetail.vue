<template>
  <section id="product-item" class="box" v-if="product">
    <span class="return-icon" @click="$router.back(1)">
      <i class="fa fa-arrow-left is-primary"></i>
    </span>
    <div class="product-item__details">
      <h1 class="title is-4">
        <p>{{ product.title }}</p>
        <span class="tag product-item__tag">{{ product.product_type }}</span>
      </h1>
      <p class="product-item__description">{{ product.description }}</p>
      <p class="product-item__created_at">
        Founded:
        <span class="has-text-weight-bold">{{ product.created_at }}</span>
      </p>
      <button class="button is-primary product-item__button" @click="addAndGoToCart">Add to Cart</button>
    </div>
    <div class="product-item__image">
      <img
        :src="require(`@/assets/${product.image_tag}`)"
        :alt="product.title"
        :title="product.title"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: "ProductItem",
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    product() {
      return this.$store.getters["product/productFromId"](Number(this.id));
    }
  },
  methods: {
    async addAndGoToCart() {
      await this.$store.dispatch("addToCart", { cartItem: this.product });
      this.$router.push("/cart");
    }
  }
};
</script>
<style scoped>
#product-item {
  display: flex;
  width: 100%;
  position: relative;
}
.return-icon {
  position: absolute;
  top: 5px;
  left: 10px;
  color: #00d1b2;
  cursor: pointer;
}
.product-item__details {
  max-width: 50%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product-item__image {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product-item__description {
  padding-bottom: 10px;
}
.product-item__created_at {
  font-size: 12px;
  padding-bottom: 10px;
}
.product-item__button {
  max-width: 150px;
}
</style>