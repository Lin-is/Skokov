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
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0)
  })
  next()
})

export default router
