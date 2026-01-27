import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  { path: '/sobre', component: () => import('../pages/Sobre.vue') },
  { path: '/login/comum', component: () => import('../pages/LoginComum.vue') },
  { path: '/login/cadarca', component: () => import('../pages/LoginCadarca.vue') },
  { path: '/cadastro/comum', component: () => import('../pages/CadastroComum.vue') },
  { path: '/cadastro/cadarca', component: () => import('../pages/CadastroCadarca.vue') },
  { path: '/confirmacao', component: () => import('../pages/Confirmacao.vue'), name: 'confirmacao' },
  { path: '/services', component: () => import('../pages/Services.vue') },
  { path: '/servico/:id', component: () => import('../pages/Service.vue'), props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
