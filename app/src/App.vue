<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheOuvidoria from './components/TheOuvidoria.vue'
import CardOuvidoria from './components/CardOuvidoria.vue'
</script>

<template>
  <div class="w-304 m-auto">
    <div class="flex flex-row items-center justify-evenly"">
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

</template>

<style scoped>
</style>
