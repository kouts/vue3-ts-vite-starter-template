import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const history = createWebHashHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      layout: 'default',
    },
  },
]
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes,
})

export { router }
