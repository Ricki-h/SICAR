
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import OngSection from '../components/ui/ong/OngSection.vue' 
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'


const currentPage = ref(1)


const listaDeOngs = ref([
  { id: 1, titulo: 'Titulo muito legal e massa', meta: 5000, arrecadado: 2000 },
  { id: 2, titulo: 'Titulo muito legal e massa', meta: 5000, arrecadado: 20 },
  { id: 3, titulo: 'Titulo muito legal e massa', meta: 5000, arrecadado: 20 },
  { id: 4, titulo: 'Titulo muito legal e massa', meta: 5000, arrecadado: 20 },
  { id: 5, titulo: 'Titulo muito legal e massa', meta: 5000, arrecadado: 20 },
  { id: 6, titulo: 'Titulo muito legal e massa', meta: 5000, arrecadado: 20 },
  { id: 7, titulo: 'ONG da Próxima Página', meta: 5000, arrecadado: 100 },
  
])

const handlePageChange = (newPage) => {
  currentPage.value = newPage
  
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <div class="min-h-screen  flex flex-col">
      
      <TheHeader />
  
      <main class="max-w-6xl mx-auto py-12 px-6 w-full flex-grow">
        <h1 class="text-heading text-5xl font-bold text-blue-950 mb-8">ONGs</h1>
  
        <div class="max-w-5xl">
          <OngSection 
          :ong="listaDeOngs" 
          :page="currentPage" 
          :perPage="6"
          @page-change="handlePageChange"
        />
        </div>
        
      </main>
  
      
      <TheFooter />
    </div>
  </template>