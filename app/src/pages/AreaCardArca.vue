<script setup>
import TheFooter from '../components/ui/TheFooter.vue';

import TheHeader from '../components/ui/TheHeader.vue';
import SearchBar from '../components/ui/SearchBar.vue';
import Acesso from '../assets/icons/Vector.png';
import Saude from '../assets/icons/Health.png';
import Documentos from '../assets/icons/Documentos.png';
import Acolhimento from '../assets/icons/Acolhimento.png';
import Comprimido from '../assets/icons/Comprimido.png';
import Uniao from '../assets/icons/Acolhimento-img.png'

const cards = [
  {
    title: 'Acesso',
    icon: Acesso,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400',
    description: 'Consulte sua situação, atualize seus dados e emita seu comprovante no sistema.'
  },
  {
    title: 'Saúde',
    icon: Saude,
    image: Comprimido,
    description: 'Encontre atendimento médico, psicológico e apoio perto de você.'
  },
  {
    title: 'Documentos',
    icon: Documentos,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    description: 'Tire ou recupere seus documentos para acessar seus direitos.'
  },
  {
    title: 'Acolhimento',
    icon: Acolhimento,
    image: Uniao,
    description: 'Veja abrigos e casas de apoio disponíveis hoje.'
  }
];
</script>
<template>
    <TheHeader />
  <main class="min-h-screen p-8 md:p-16 font-sans">
    
    <div class="max-w-7xl mx-auto mb-12">
      <h1 class="text-heading text-4xl md:text-5xl font-bold  mb-6">
        Área CadArca
      </h1>
      
      
      <SearchBar class="mb-4"/>
      <p class="text-gray-500 text-sm font-medium mb-7">
        CadArca conecta pessoas em vulnerabilidade a serviços essenciais
      </p>
    </div>
    

    
    <section class="max-w-7xl mx-auto">
      <h2 class="text-[40px] font-bold  mb-8 text-heading">Meu CadArca</h2>

      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="card in cards" 
          :key="card.title"
          class="rounded-2xl shadow-sm overflow-hidden flex flex-col border border-transparent hover:border-blue-200 transition-all bg-bg-blue"
        >
          
          <div class="h-44 overflow-hidden">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
          </div>

          
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex items-center gap-3 mb-3">
              <img :src="card.icon" alt="">
              
              <h3 class="text-[28px] font-bold text-orange-600  tracking-tight">
                {{ card.title }}
              </h3>
            </div>
            
            <p class="text-gray-600  mb-8 leading-relaxed text-text">
              {{ card.description }}
            </p>

            <button class="mt-auto w-[158px] self-center bg-[#2563EB] hover:bg-blue-700 text-xl text-white font-semibold py-3 rounded-lg shadow-md transition-colors cursor-pointer">
              Ver serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
  <TheFooter />
</template>



