<script setup>
import { ref } from 'vue';
import TheHeader from '../components/ui/TheHeader.vue';
import TheFooter from '../components/ui/TheFooter.vue';

const activeTab = ref('sobre');
const meta = ref(5000);
const arrecadado = ref(2000);
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');

:host {
  font-family: 'Inter', sans-serif;
}
</style>
<template>
    <TheHeader/>
  <main class="max-w-6xl mx-auto px-6 py-10 font-sans text-gray-800">
    
    <h1 class="text-4xl font-bold mb-8 tracking-tight">
      <span class="text-gray-900 text-heading max-md:text-lg">ONGs > </span>
      <span class="text-gray-900 text-heading max-md:text-lg">Título muito legal e massa</span>
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      
      <div class="lg:col-span-6">
        
        <div class="w-full aspect-video bg-[#c4c4c4] rounded-sm mb-8"></div>
        
        
        <div class="flex border-b border-gray-100 mb-6 bg-blue-50/30">
          <button 
            @click="activeTab = 'sobre'"
            :class="activeTab === 'sobre' ? 'border-b-4 border-black font-bold text-gray-900 text-heading' : 'text-gray-500'"
            class="px-8 py-3 text-xl transition-all"
          >
            Sobre
          </button>
          <button 
            @click="activeTab = 'ajudantes'"
            :class="activeTab === 'ajudantes' ? 'border-b-4 border-black font-bold text-gray-900 text-heading' : 'text-gray-500'"
            class="px-8 py-3 text-xl transition-all"
          >
            Ajudantes
          </button>
        </div>

        
        <div v-if="activeTab === 'sobre'" class="text-gray-600 leading-relaxed text-lg space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla est vel 
            imperdiet ultricies. Nulla efficitur nisi sed est vehicula mattis. Aliquam 
            dignissim ullamcorper arcu, quis venenatis urna eleifend in. Nulla facilisi. 
            Morbi varius leo felis, at varius ex rutrum in. Curabitur suscipit nec eros 
            eget eleifend. Etiam nec sapien nulla.
          </p>
          <p>
            Cras posuere nibh eget quam varius, at tincidunt dui euismod. In imperdiet 
            elementum ipsum et elementum. Duis luctus risus non leo congue, at imperdiet 
            turpis tempus. Cras condimentum maximus sollicitudin. Curabitur molestie tellus 
            in lectus elementum, a viverra ipsum ultricies. Sed porta iaculis metus non 
            egestas. Maecenas porttitor gravida mi eget vestibulum.
          </p>
        </div>

        <div v-else class="py-10 text-center text-gray-400">
          Lista de ajudantes apareceria aqui.
        </div>
      </div>

      
      <div class="lg:col-span-6 space-y-4">
        
       
        <div class=" p-8 rounded-lg shadow-sm border border-blue-100">
          <p class="text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">2 Apoiadores</p>
          <h2 class="text-heading text-xl font-bold mb-6 text-gray-900">Titulo muito legal e massa</h2>
          
          
          <div class="w-full bg-[#cbd5e1] rounded-full h-3.5 mb-8">
            <div class="bg-[#ff6b00] h-3.5 rounded-full" :style="{ width: (arrecadado / meta * 100) + '%' }"></div>
          </div>

          
          <div class="flex justify-between items-start mb-10">
            <div>
              <p class="text-gray-500 text-xl font-bold uppercase mb-1 max-md:text-sm">Meta (R$)</p>
              <p class="text-5xl font-medium text-[#ff6b00] tracking-tighter max-md:text-2xl">{{ meta }}</p>
            </div>
            <div class="text-right">
              <p class="text-gray-500 text-xl font-bold uppercase mb-1 max-md:text-sm">Arrecadado (R$)</p>
              <p class="text-5xl font-medium text-[#ff6b00] tracking-tighter max-md:text-2xl">{{ arrecadado }}</p>
            </div>
          </div>

          
          <div class="space-y-5">
            <div>
              <label class="text-heading block text-sm font-bold text-gray-800 mb-1.5">Nome</label>
              <input 
                type="text" 
                placeholder="Digite o nome do Doador" 
                class="w-full p-3.5 border border-gray-300 rounded-md bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
            </div>
            <div>
              <label class="text-heading block text-sm font-bold text-gray-800 mb-1.5">Valor</label>
              <input 
                type="text" 
                placeholder="Digite o valor" 
                class="w-full p-3.5 border border-gray-300 rounded-md bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
            </div>
            
            <button class="w-full bg-[#1e293b] text-white font-bold py-4 rounded-md mt-2 hover:bg-black transition-colors uppercase tracking-widest text-sm">
              AJUDAR ONG
            </button>
          </div>
        </div>

        
        <button class="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-bold py-4 rounded-md flex items-center justify-center gap-3 transition-colors shadow-md">
          <span class="text-sm">sicar.com/ongs/apoiar/ong</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </button>

      </div>
    </div>
  </main>
  <TheFooter/>
</template>