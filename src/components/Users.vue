<template>
  <div>
    Users for team {{ $route.params.teamId }}

    <button @click="$router.push('/')">Go home</button>
  </div>
</template>

<script>
export default {
  name: 'Users',
  props: {
  },
  watch: {
    '$route' (to, from) {
      // eslint-disable-next-line
      console.log('to, from :', to, from);
    }
  },
  updated() {
    // eslint-disable-next-line
    // console.log('this.$route.params.teamId :', this.$route.params.teamId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
