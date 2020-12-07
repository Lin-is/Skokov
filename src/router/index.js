import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/news',
    name: 'News',
    meta: { layout: 'news' },
    component: () => import('../views/News.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    meta: { layout: 'news' },
    component: () => import('../views/NewsArticle.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
