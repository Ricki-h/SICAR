<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import api from '../services/api'


import SearchBar from '../components/ui/SearchBar.vue'
import CategoriaFiltro from '../components/ui/CategoriaFiltro.vue'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import Loading from '../components/ui/Loading.vue'
import CursosCard from '../components/ui/cursos/CursosCard.vue' 

const services = ref([])
const categorias = ref([])
const searchResults = ref([])
const categoriaAtiva = ref(null)
const loading = ref(true)

const pageRegulares = ref(1)
const pageCadarca = ref(1)
const PER_PAGE = 6

onMounted(async () => {
  try {
    const { data: servicos } = await api.get('/cursos/all')
    const { data: categoriasApi } = await api.get('/cursos/categorias/all')
    services.value = servicos
    categorias.value = categoriasApi
  } catch (err) {
    console.error("Erro ao carregar dados", err)
  } finally {
    loading.value = false;
  }
})

watch([searchResults, categoriaAtiva], () => {
  pageRegulares.value = 1
  pageCadarca.value = 1
})

const filtered = computed(() => {
  let base = searchResults.value.length ? searchResults.value : services.value
  if (categoriaAtiva.value) {
    base = base.filter(s => s?.CategoriaServico?.id === categoriaAtiva.value)
  }
  return base
})


const regulares = computed(() => filtered.value.filter(s => !s.desabrigado))
const cadarca = computed(() => filtered.value.filter(s => s.desabrigado))


const paginate = (items, page) => {
  return items.slice((page - 1) * PER_PAGE, page * PER_PAGE)
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <TheHeader />

    <main class="max-w-7xl mx-auto px-6 py-12">
      
      <h1 class="text-5xl font-black text-[#1a2b48] mb-8">Cursos</h1>

      
      
        <SearchBar
          :items="services"
          searchKey="nome"
          class="custom-search-bar"
          @results="searchResults = $event"
        />
      
      <p class="text-xs text-gray-400 mb-12">{{ filtered.length }} Cursos encontrados</p>

      <div class="flex flex-col lg:flex-row gap-8">
        
        <div class="flex-1 space-y-16">
          
          
          <section>
            <h2 class="text-3xl font-black text-[#1a2b48] mb-8 uppercase tracking-tight">Cursos regulares</h2>
            
            <div v-if="loading" class="flex justify-center py-10"><Loading /></div>
            
            <div v-else class="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <CursosCard 
                v-for="curso in paginate(regulares, pageRegulares)" 
                :key="curso.id" 
                :service="curso" 
              />
            </div>

           
            <div v-if="regulares.length > PER_PAGE" class="flex items-center gap-2 mt-8">
               <button @click="pageRegulares--" :disabled="pageRegulares === 1" class="p-2"> &lt; </button>
               <button v-for="n in Math.ceil(regulares.length / PER_PAGE)" :key="n" 
                 @click="pageRegulares = n"
                 :class="['px-3 py-1 rounded', pageRegulares === n ? 'bg-blue-100 font-bold' : '']">
                 {{ n }}
               </button>
               <button @click="pageRegulares++" :disabled="pageRegulares >= Math.ceil(regulares.length / PER_PAGE)" class="p-2"> &gt; </button>
            </div>
          </section>

          
          <section>
            <h2 class="text-3xl font-black text-[#1a2b48] mb-8 uppercase tracking-tight">Cursos CadArca</h2>
            
            <div v-if="!loading && cadarca.length === 0" class="text-gray-400 italic">Nenhum curso disponível nesta categoria.</div>
            
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <CursosCard 
                v-for="curso in paginate(cadarca, pageCadarca)" 
                :key="curso.id" 
                :curso="curso" 
              />
            </div>
          </section>
        </div>

       
        
        <CategoriaFiltro 
            :categorias="categorias"
            :activeCategoria="categoriaAtiva"
            @categoriaChange="categoriaAtiva = $event"
        />
          
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
:deep(.custom-search-bar input) {
  border-color: #ff8a00 !important;
  border-width: 2px;
  border-radius: 9999px;
  padding: 1.5rem 1rem 1.5rem 3rem;
}


h1, h2, h3 {
  font-family: 'Inter', sans-serif; 
}
</style>