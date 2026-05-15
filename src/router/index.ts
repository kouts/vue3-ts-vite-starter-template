import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import type { LayoutKey } from '@/layouts/registry'
import Home from '@/views/Home.vue'

const history = createWebHashHistory()

type RouteWithLayoutMeta = Omit<RouteRecordRaw, 'meta'> & {
  meta: {
    layout: LayoutKey
  }
}

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
    path: '/empty',
    name: 'Empty',
    component: () => import('@/views/Empty.vue'),
    meta: {
      layout: 'empty',
    },
  },
] satisfies RouteWithLayoutMeta[]

const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes,
})

export { router }
