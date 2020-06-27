import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  Public,
  Private,
  Login,
  Register,
  Home,
  NewIncident
} from '@/pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Public',
    redirect: '/login',
    component: Public,
    beforeEnter: (to, from, next) => {
      if (Vue.prototype.$globalStore.getters.getterAccount && Object.keys(Vue.prototype.$globalStore.getters.getterAccount).length > 0) {
        next({ name: 'Private' })
      } else {
        next()
      }
    },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/main',
    name: 'Private',
    redirect: '/home',
    component: Private,
    beforeEnter: (to, from, next) => {
      if (Vue.prototype.$globalStore.getters.getterAccount && Object.keys(Vue.prototype.$globalStore.getters.getterAccount).length > 0) {
        next()
      } else {
        next({ name: 'Public' })
      }
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/incident/new',
        name: 'NewIncident',
        component: NewIncident
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
