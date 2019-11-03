import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

import App from './App.vue'
import Users from './components/Users.vue'
import ProductList from './components/ProductList.vue'
import ProductDetail from './components/ProductDetail.vue'
import CartList from './components/CartList.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { name: "users", path: '/users', component: Users },
  { name: "products", path: '/products', component: ProductList },
  { name: "product-detail", path: '/products/:id', component: ProductDetail, props: true },
  { name: "cart", path: '/cart', component: CartList },
  { name: "root", path: '/', redirect: '/products' },
  {
    path: '*',
    component: {
      name: "NotFound",
      template: `<p style="text-align: center">Page not found!. Please pick another one</p>`
    }
  },
]

const router = new VueRouter({ routes, /* mode: 'history' */ })

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
