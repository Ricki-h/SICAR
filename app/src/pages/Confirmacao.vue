<script setup>
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const type = route.query.type

const titulo = computed(() => {
  return type === 'cadastro'
    ? 'Cadastro realizado com sucesso!'
    : 'Login realizado com sucesso!'
})

const descricao = computed(() => {
  return type === 'cadastro'
    ? 'Sua conta foi criada. Você já pode acessar a plataforma.'
    : 'Você entrou com sucesso. Aproveite todos os recursos!'
})

onMounted(() => {
  setTimeout(() => {
    router.push('/')
  }, 2500)
})
</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-bg">
    <div class="bg-white rounded-xl shadow-md p-10 text-center max-w-md w-full space-y-4">

      <div class="text-blue-500 text-5xl">✔</div>

      <h1 class="text-2xl font-bold text-title">
        {{ titulo }}
      </h1>

      <p class="text-text">
        {{ descricao }}
      </p>

      <p class="text-sm text-text">
        Redirecionando...
      </p>
    </div>
  </main>
</template>
