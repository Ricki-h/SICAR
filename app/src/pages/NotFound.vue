<script setup>
import BaseButton from '../components/ui/BaseButton.vue';
import TheHeader from '../components/ui/TheHeader.vue';

</script>

<template>
    <TheHeader/>
  <main class="bg-bg ui-container-xl px-6 sm:px-12 lg:px-28 flex flex-col lg:flex-row gap-8 xl:gap-16 justify-center lg:justify-between min-h-[90vh] items-center">
    <img src="/404.png" alt="not found" class="md:w-110 xl:w-150 w-full">
    <div class="flex flex-col gap-8 lg:w-full">
        <div class="text-orange-600 font-bold">
            <h1 class="md:text-6xl text-4xl mb-4">Ops!</h1>
            <h2 class="md:text-4xl text-2xl">Página não encontrada.</h2>
        </div>
        <p class="md:text-xl text-text">Essa página não existe ou foi parar em outro lugar. Clique abaixo para voltar ao começo.</p>
        <BaseButton style="squared" class="w-full rounded-2xl" to="/">Voltar à Pagina Inicial</BaseButton>
    </div>
</main>
</template>
