<template>
  <div id="app">
    <div class="navigation-buttons" v-if="$route.path !== '/login'">
      <div class="is-pulled-right">
          <button @click="logout" class="button is-text is-pulled-left">
            Logout
          </button>
          <RouterLink to="/products" class="button">
            <i class="fa fa-user-circle"></i>
            <span>Shop</span>
          </RouterLink>
          <RouterLink to="/cart" class="button is-primary">
            <i class="fa fa-shopping-cart"></i>
            <span>{{ cartTotalQuantity }}</span>
          </RouterLink>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-6 column--align-center">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "App",
  created() {
    this.updateInitialState(localStorage.token)
  },
  watch: {
    token() {
      this.updateInitialState(this.token)
    }
  },
  computed: {
    ...mapGetters({
      token: 'token',
      cartTotalQuantity: 'cartTotalQuantity',
    })
  },
  methods: {
    ...mapActions({
      getProducts: 'product/getProducts',
      getCartItems: 'getCartItems',
      removeAuth: 'logout'
    }),
    updateInitialState(token) {
      if (token) {
        this.$store.commit('SET_TOKEN', { token })
        this.getProducts({ token })
        this.getCartItems({ token })
      }
    },
    async logout() {
      await this.removeAuth()
      this.$router.push('/login')
    }
  }
};
</script>

<style>
html, body {
  height: 100%;
  background: #F2F6FA;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
}

.column--align-center {
  margin: 0 auto;
}

.navigation-buttons {
  position: absolute;
  top: 5px;
  width: 99%;
  z-index: 99;
}

.navigation-buttons .button {
  margin: 0 2px;
}

.navigation-buttons .button .fa {
  padding-right: 5px;
}
</style>