import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/layout/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'demo-home',
    component: Home
  },
  {
    path: '/instruction',
    name: 'demo-instruction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "instruction" */ '../views/instruction/instruction.vue')
  },
  {
    path: '/ui',
    name: 'demo-ui',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ui" */ '../views/ui/ui.vue')
  },
  {
    path: '/http',
    name: 'demo-http',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "http" */ '../views/http/http.vue')
  },
  {
    path: '/communication',
    name: 'communication',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "communication" */ '../views/communication/communication-main.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
