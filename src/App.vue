<template>
  <div id="app">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
      <RouterLink to="/calendar">Calendar</RouterLink>
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
.nav a {
  display: inline-block;
  padding: 8px 16px;
}
</style>
