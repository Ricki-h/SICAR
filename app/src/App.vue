<script setup>
import CardOuvidoria from './components/CardOuvidoria.vue'
import TheDropdown from './components/TheDropdown.vue'
import TheOuvidoria from './components/TheOuvidoria.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="max-w-5xl mx-auto flex flex-col gap-10 max-sm:px-8 items-center">
      <TheOuvidoria class="flex flex-col gap-3 md:items-center">
          <template #title>
            OUVIDORIA
          </template>

          <template #subtitle>
            Aqui te ouvimos independentemente do que tem a dizer.
          </template>
      </TheOuvidoria>

      <div class="p-0 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

        <CardOuvidoria>
          <template #imagem>
            <img src="./assets/mega-phone.svg"></img>
          </template>

          <template #title>
            <h2 class="text-2xl font-semibold text-blue-950">DENÚNCIA</h2>
          </template>
        </CardOuvidoria>

        <CardOuvidoria>
          <template #imagem>
            <img src="./assets/comment.svg"></img>
          </template>

          <template #title>
            <h2 class="text-2xl font-semibold text-blue-950">SOLICITAÇÃO</h2>
          </template>
        </CardOuvidoria>

        <CardOuvidoria>
          <template #imagem>
            <img src="./assets/Like.svg"></img>
          </template>

          <template #title>
            <h2 class="text-2xl font-semibold text-blue-950">ELOGIO</h2>
          </template>
        </CardOuvidoria>

        <CardOuvidoria>
          <template #imagem>
            <img src="./assets/Dislike.svg"></img>
          </template>

          <template #title>
            <h2 class="text-2xl font-semibold text-blue-950">RECLAMAÇÕES</h2>
          </template>
        </CardOuvidoria>
        
      </div>
    </div>
  </div>


</template>

<style scoped>
</style>
