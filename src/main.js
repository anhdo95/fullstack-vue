import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

import App from './App.vue'
// import Users from './components/Users.vue'
// import Home from './components/Home.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

// const routes = [
//   { path: '/users', component: Users },
//   { path: '/', component: Home },
// ]

// const router = new VueRouter({ routes, /* mode: 'history' */ })

new Vue({
  render: h => h(App),
  // router,
  store
}).$mount('#app')
