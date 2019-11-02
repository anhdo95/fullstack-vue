<template>
  <div id="home">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <CartList />
        </div>
        <div class="column is-9">
          <ProductList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from './CartList';
import ProductList from './ProductList';

export default {
  name: 'App',
  components: {
    CartList,
    ProductList
  }
};
</script>

<style>
html,
body {
  background: #f2f6fa;
}

#home {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 769px) {
  html,
  body {
    height: 100%;
  }
}
</style>
