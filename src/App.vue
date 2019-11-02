<template>
  <div id="app">
    <nav class="app-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
    </nav>
    <hr />
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.app-nav {
  background-color: #fff;
}
.app-nav a {
  display: inline-block;
  padding: 12px 16px;
}
</style>
