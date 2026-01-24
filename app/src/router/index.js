import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  { path: '/sobre', component: () => import('../pages/Sobre.vue') },
  { path: '/login/comum', component: () => import('../pages/LoginComum.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
