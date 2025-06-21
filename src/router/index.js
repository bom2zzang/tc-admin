import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/places',
      name: 'places',
      redirect: { name: 'places-list' },
      children: [
        {
          path: 'list',
          name: 'places-list',
          component: () => import('@/views/places/index.vue'),
        },
        {
          path: 'write',
          name: 'places-write',
          component: () => import('@/views/places/PlaceCreate.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
  ],
})

export default router
