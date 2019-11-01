import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/store.js'

import App from './App.vue'
import Input from './components/Input.vue'
import Users from './components/Users.vue'
import Home from './components/Home.vue'
import Calendar from './components/Calendar.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.component('app-input', Input)

const routes = [
  { path: '/calendar', component: Calendar },
  { path: '/users', component: Users },
  { path: '/', component: Home },
]

const router = new VueRouter({ routes, /* mode: 'history' */ })

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
