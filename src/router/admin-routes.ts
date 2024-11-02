const isDev = process.env.NODE_ENV === 'development'

export const adminRoutes = isDev
  ? [
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/Admin.vue'),
        meta: {
          layout: 'default',
        },
      },
    ]
  : []
