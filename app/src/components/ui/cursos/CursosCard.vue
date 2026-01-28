<script setup>
defineProps({
  curso: {
    type: Object,
    required: true
  }
})
</script>
<template>
    <div class="bg-[#f0f7ff] rounded-xl p-6 flex flex-col md:flex-row justify-between shadow-sm border border-transparent hover:border-blue-200 transition-all">
      <div class="flex-1 pr-4">
        
        <span class="inline-block px-3 py-1 rounded-full bg-white text-[10px] font-bold text-gray-600 border border-gray-200 mb-3 uppercase tracking-wider">
          {{ curso.categoria || 'Tecnologia' }}
        </span>
        
       
        <h3 class="text-xl font-extrabold text-[#1a2b48] mb-3 leading-tight">
          {{ curso.titulo }}
        </h3>
        <p class="text-xs text-gray-500 mb-6 leading-relaxed line-clamp-4">
          {{ curso.descricao || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. O curso possui os tópicos fundamentais para a criação de sistemas web eficazes.' }}
        </p>
  
        
        <div class="flex items-center gap-6 mt-auto">
          <button class="bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-6 rounded-md transition-colors">
            Inscrever-se
          </button>
          <a href="#" class="text-[#1a2b48] text-xs font-bold flex items-center gap-1 hover:underline">
            Acessar Curso <span class="text-lg">→</span>
          </a>
        </div>
      </div>
  
      
      <div class="mt-4 md:mt-0 w-full md:w-32 h-32 bg-[#9ca3af] rounded-lg flex items-center justify-center overflow-hidden">
        <img v-if="curso.imagem" :src="curso.imagem" class="w-full h-full object-cover" />
        <div v-else class="text-white opacity-50">
          
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </div>
  </template>
  