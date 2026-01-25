<script setup>
import CardOuvidoria from './components/CardOuvidoria.vue'
import TheDropdown from './components/TheDropdown.vue'
import TheOuvidoria from './components/TheOuvidoria.vue'
import TheServico from './components/TheServico.vue';
import CardServico from './components/CardServico.vue';
</script>

<template>
  <div class="container mx-auto">
    <div class="container mx-auto flex flex-col gap-10 max-sm:px-8 items-center">
      <div class="flex flex-col gap-3 items-center max-lg:self-start max-lg:pl-13 max-md:pl-1">
        <TheServico class="flex flex-col items-center max-lg:items-start">
            <template #title>
              SERVIÇOS
            </template>

            <template #subtitle>
              Acesse os melhores serviços para você
            </template>
        </TheServico>
      </div>
      
      <div class="grid grid-cols-4 gap-8 max-lg:gap-6 max-sm:gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <CardServico category="SERVIÇO POPULAR"
        title="CONSULTA DE SALDO"
        description="Lorem impsum Lorem impsum dolor Lorem impsum Lorem impsum sit Lorem impsum Lorem impsum amet Lorem impsum Lorem impsum "
         >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 46 32" fill="none">
              <path d="M23.1826 0V4.64138H38.2101L26.4386 21.0585L16.643 11.0958C16.2152 10.6607 15.6349 10.4163 15.0299 10.4163C14.4248 10.4163 13.8446 10.6607 13.4167 11.0958L0 28.7185L3.22638 32L15.0299 16.018L24.8254 25.9807C25.2533 26.4158 25.8335 26.6602 26.4386 26.6602C27.0436 26.6602 27.6239 26.4158 28.0518 25.9807L41.4365 7.92284V23.2069H46V0H23.1826Z" fill="#14171B"/>
            </svg>
          </template>
        </CardServico>
        <CardServico category="SERVIÇO RECOMENDADO" 
        title="CONSULTA DE SALDO"
        description="Lorem impsum Lorem impsum dolor Lorem impsum Lorem impsum sit Lorem impsum Lorem impsum amet Lorem impsum Lorem impsum "
         />
        <CardServico category="SERVIÇO FAVORITADO" 
        title="CONSULTA DE SALDO"
        description="Lorem impsum Lorem impsum dolor Lorem impsum Lorem impsum sit Lorem impsum Lorem impsum amet Lorem impsum Lorem impsum "
         >
        <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" viewBox="0 0 23 32" fill="none">
                <path d="M20.7 2.28571V28.2857L12.535 24.1829L11.5 23.6686L10.465 24.1829L2.3 28.2857V2.28571H20.7ZM20.7 0H2.3C1.69 0 1.10499 0.240816 0.673654 0.66947C0.242321 1.09812 0 1.67951 0 2.28571V32L11.5 26.2857L23 32V2.28571C23 1.67951 22.7577 1.09812 22.3263 0.66947C21.895 0.240816 21.31 0 20.7 0Z" fill="#14171B"/>
              </svg>
        </template>
        </CardServico>
        <CardServico category="SERVIÇO POPULAR" 
        title="CONSULTA DE SALDO"
        description="Lorem impsum Lorem impsum dolor Lorem impsum Lorem impsum sit Lorem impsum Lorem impsum amet Lorem impsum Lorem impsum "
        >
          <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 46 32" fill="none">
                <path d="M23.1826 0V4.64138H38.2101L26.4386 21.0585L16.643 11.0958C16.2152 10.6607 15.6349 10.4163 15.0299 10.4163C14.4248 10.4163 13.8446 10.6607 13.4167 11.0958L0 28.7185L3.22638 32L15.0299 16.018L24.8254 25.9807C25.2533 26.4158 25.8335 26.6602 26.4386 26.6602C27.0436 26.6602 27.6239 26.4158 28.0518 25.9807L41.4365 7.92284V23.2069H46V0H23.1826Z" fill="#14171B"/>
              </svg>
          </template>
        </CardServico>
      </div>
      

      

      <button class="flex px-4 py-5 rounded-full justify-center items-center gap-2 bg-[#FD6900]">
        <a href="#" class="text-2xl font-bold text-white">
          TODOS OS SERVIÇOS
        </a>
      </button> 
    </div>
  </div>


</template>

<style scoped>
</style>
