<template>
  <div>
    <nav>
      <h1>Which movie?</h1>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/products">Products</CustomLink>
      <CustomLink to="/users">Users</CustomLink>
    </nav>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import Home from "@/components/Home";
import Users from "@/components/Users";
import ProductList from "@/components/ProductList";
import CustomLink from "@/components/Link";

import EventBus from "@/event-bus";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: ProductList },
  { path: "/users", component: Users }
];

export default {
  name: "custom-view",
  components: {
    CustomLink
  },
  data() {
    return {
      currentView: {}
    };
  },
  created() {
    EventBus.$on("NAVIGATE", this.updateCurrentView);

    window.addEventListener("popstate", this.updateCurrentView);
  },
  methods: {
    updateCurrentView() {
      if (this.getRouteObject() === undefined) {
        this.currentView = {
          name: "NotFound",
          template: `
          <p style="text-align: center">Page not found!. Please pick another one</p>
        `
        };
      } else {
        this.currentView = this.getRouteObject().component;
      }
    },
    getRouteObject() {
      return routes.find(route => route.path === window.location.pathname);
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  text-align: center;
}
</style>