import VueRouter from 'vue-router'

import Login from './components/Login.vue'
import Users from './components/Users.vue'
import ProductList from './components/ProductList.vue'
import ProductDetail from './components/ProductDetail.vue'
import CartList from './components/CartList.vue'

const routes = [
  { name: "login", path: '/login', component: Login },
  { name: "users", path: '/users', component: Users },
  { name: "products", path: '/products', component: ProductList },
  { name: "product-detail", path: '/products/:id', component: ProductDetail, props: true },
  { name: "cart", path: '/cart', component: CartList },
  { name: "root", path: '/', redirect: '/login' },
  {
    path: '*',
    component: {
      name: "NotFound",
      template: `<p style="text-align: center">Page not found!. Please pick another one</p>`
    }
  },
]


const router = new VueRouter({ routes, /* mode: 'history' */ })

router.beforeEach((to, from , next) => {
  const { token } = localStorage
  if (!token && to.name !== 'login') {
    return next('/login')
  } else if (token && to.name === 'login') {
    return next('/products')
  }

  next()
})

export default router