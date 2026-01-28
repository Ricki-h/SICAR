import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

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
  { path: '/vagas', component: () => import('../pages/Empregos.vue') },
  { path: '/vagas/:id', component: () => import('../pages/Emprego.vue'), props: true },
  { path: '/perfil/dados', component: () => import('../pages/DadosPessoais.vue'), meta: { requiresAuth: true } },
  { path: '/perfil', component: () => import('../pages/Perfil.vue'), meta: { requiresAuth: true } },
  { path: '/login-obrigatorio', component: () => import('../pages/LoginObrigatorio.vue') },
  { path: '/ongs', component: () => import('../pages/Ong.vue') },
  { path: '/ongs/:id', component: () => import('../pages/OngDetalhes.vue'), props: true },
  { path: '/auxilios', component: () => import('../pages/Auxilios.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated)
    return '/login-obrigatorio'
})

export default router
