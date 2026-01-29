<script setup>
import BaseButton from '../components/ui/BaseButton.vue';


</script>

<template>
    <main class="flex justify-center items-center bg-bg min-h-screen">
        <div class="p-8 rounded-lg flex flex-col items-center justify-center gap-4 text-center px-6 bg-bg-blue w-fit">
          <h1 class="text-4xl font-bold text-heading">
            Você precisa estar logado
          </h1>
      
          <p class="text-text max-w-md">
            Para acessar esta funcionalidade, faça login ou crie uma conta.
          </p>
      
          <div class="flex gap-3 w-full">
              <BaseButton color="orange" to="/login/comum" class="w-full">Login</BaseButton>
              <BaseButton color="blue" variant="outline" to="/cadastro/comum" class="w-full">Cadastro</BaseButton>
          </div>
        </div>
    </main>
</template>