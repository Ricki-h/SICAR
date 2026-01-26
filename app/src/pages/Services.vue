<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import api from '../services/api'

import SearchBar from '../components/ui/SearchBar.vue'
import CategoriaFiltro from '../components/ui/CategoriaFiltro.vue'
import ServiceSection from '../components/ui/servico/ServiceSection.vue'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import Loading from '../components/ui/Loading.vue'

const services = ref([])
const categorias = ref([])
const searchResults = ref([])
const categoriaAtiva = ref(null)
const loading = ref(true)

const pageRegulares = ref(1)
const pageCadarca = ref(1)

const PER_PAGE = 6


onMounted(async () => {
  const { data: servicos } = await api.get('/servicos/all')
  const { data: categoriasApi } = await api.get('/servicos/categorias/all')
  services.value = servicos
  categorias.value = categoriasApi
  loading.value = false
})

watch([searchResults, categoriaAtiva], () => {
  pageRegulares.value = 1
  pageCadarca.value = 1
})

const filtered = computed(() => {
  let base = searchResults.value.length
    ? searchResults.value
    : services.value

  if (categoriaAtiva.value) {
    base = base.filter(
      s => s?.CategoriaServico?.id === categoriaAtiva.value
    )
  }

  return base
})

const regulares = computed(() =>
  filtered.value.filter(s => !s.desabrigado)
)

const cadarca = computed(() =>
  filtered.value.filter(s => s.desabrigado)
)
</script>


<template>
    <TheHeader class="mb-15"></TheHeader>
  <div class="ui-container-xl px-6 sm:px-12 lg:px-28 space-y-10 mb-25">
    <h1 class="text-heading font-text text-4xl sm:text-5xl font-bold">Serviços</h1>
    <SearchBar
      :items="services"
      searchKey="nome"
      @results="searchResults = $event"
    />

    <div class="flex flex-col lg:flex-row-reverse gap-10 lg:gap-6">
        <CategoriaFiltro class="h-full"
          :categorias="categorias"
          :activeCategoria="categoriaAtiva"
          @categoriaChange="categoriaAtiva = $event"
        />
    
          <div class="flex-1 space-y-12">
    
            <section>
                <h2 class="text-3xl font-title mb-6 text-heading font-bold text-center sm:text-left">
                    Serviços Regulares
                </h2>
    
                <ServiceSection v-if="!loading"
                    :services="regulares"
                    :perPage="PER_PAGE"
                    :page="pageRegulares"
                    @page-change="pageRegulares = $event"
                />
                <div v-else class="flex w-full justify-center items-center">
                  <Loading/>
                </div>

            </section>
    
            <section>
                <h2 class="text-3xl font-title mb-6 text-heading font-bold text-center sm:text-left">
                    Serviços CadARCA
                </h2>
    
                <ServiceSection v-if="!loading && cadarca.length"
                    :services="cadarca"
                    :perPage="PER_PAGE"
                    :page="pageCadarca"
                    @page-change="pageCadarca = $event"
                />
                <div v-else class="flex w-full justify-center items-center">
                  <Loading/>
                </div>
            </section>
    
          </div>
    </div>
  </div>
  <TheFooter/>
</template>