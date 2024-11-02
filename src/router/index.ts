import { createRouter, createWebHashHistory } from 'vue-router'
import { adminRoutes } from '@/router/admin-routes'

const history = createWebHashHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      layout: 'default',
    },
  },
  ...adminRoutes,
]
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes,
})

export { router }
