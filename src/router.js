import VueRouter from "vue-router";

import Login from "./components/Login.vue";
import Users from "./components/Users.vue";
import ProductList from "./components/ProductList.vue";
import ProductDetail from "./components/ProductDetail.vue";
import CartList from "./components/CartList.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  {
    name: "login",
    path: "/login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        return next("/products")
      }
      next()
    }
  },
  { name: "users", path: "/users", component: Users },
  { name: "products", path: "/products", component: ProductList },
  {
    name: "product-detail",
    path: "/products/:id",
    component: ProductDetail,
    props: true,
    beforeEnter: (to, from, next) => {
      // const { id } = to.params
      // TODO: find product by `id` and redirect to `not-found` as any product couldn't be found.
      next()
    }
  },
  { name: "cart", path: "/cart", component: CartList },
  { name: "root", path: "/", redirect: "/products" },
  { name: "not-found", path: "/not-found", component: NotFound },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({ routes /* mode: 'history' */ });

router.beforeEach((to, from, next) => {
  if (!localStorage.token && to.name !== "login") {
    return next("/login");
  }
  next();
});

export default router;
