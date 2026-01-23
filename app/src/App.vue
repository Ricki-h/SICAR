<script setup>
import CardOuvidoria from './components/CardOuvidoria.vue'
import TheOuvidoria from './components/TheOuvidoria.vue';
</script>

<template>
  <div class="max-w-7xl mx-auto p-4 md:p-0">
    <div class="max-w-5xl mx-auto flex flex-col gap-12">
      <TheOuvidoria>
          <template #title>
            OUVIDORIA
          </template>

          <template #subtitle>
            Aqui te ouvimos independentemente do que tem a dizer.
          </template>
      </TheOuvidoria>

      <div class="flex flex-col md:flex-row items-center gap-[10px] md:justify-evenly">

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
