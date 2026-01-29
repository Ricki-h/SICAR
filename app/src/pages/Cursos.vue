<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import api from '../services/api'


import SearchBar from '../components/ui/SearchBar.vue'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import Loading from '../components/ui/Loading.vue'
import CursosSection from '../components/ui/cursos/CursosSection.vue' 

const cursos = ref([])
const loading = ref(true)
const searchResults = ref([])
const page = ref(1)
const PER_PAGE = 6

onMounted(async () => {
  const { data } = await api.get('/cursos/all')
  console.log('CURSOS DA API:', data)
  cursos.value = data
  loading.value = false
})

watch(searchResults, () => {
  page.value = 1
})

const filtered = computed(() => {
  let base = searchResults.value.length
    ? searchResults.value
    : cursos.value

  return base
})
</script>

<template>
  <div class="min-h-screen bg-bg">
    <TheHeader class="mb-15"/>

    <main class="ui-container-xl mx-auto px-6 sm:px-12 lg:px-28 font-text mb-25">
      
      <h1 class="text-5xl font-bold text-heading mb-8 font-title">Cursos</h1>

      <SearchBar
        :items="cursos"
        searchKey="titulo"
        @results="searchResults = $event"
      />
      
      <p class="text-xs text-gray-400 mb-12">{{ filtered.length }} Cursos encontrados</p>

      <div class="flex flex-col lg:flex-row gap-8">
        
           <section v-if="!loading">
              <CursosSection
              :cursos="filtered"
              :perPage="PER_PAGE"
              :page="page"
              @page-change="page = $event"
            />
          </section>
          <div v-else class="flex w-full justify-center py-10 items-center">
              <Loading/>
          </div>
        </div>
          
    </main>

    <TheFooter />
  </div>
</template>