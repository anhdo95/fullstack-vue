<template>
  <div id="login" class="box has-text-centered">
    <h2 class="title">Fullstack Clothing</h2>
    <button @click="login" :class="[{ 'is-loading': authLoading }, 'button is-primary']">Login</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: "Login",
  computed: mapGetters({
    authLoading: 'authLoading'
  }),
  // created() {
  //   if (localStorage.token) {
  //     this.$router.push('/products')
  //   }
  // },
  methods: {
    async login() {
      await this.$store.dispatch("login");
      this.$router.push("/products");
    }
  }
};
</script>
<style scoped>
.box {
  padding: 30px;
}
</style>