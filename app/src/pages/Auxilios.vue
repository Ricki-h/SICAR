<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import api from '../services/api'

import SearchBar from '../components/ui/SearchBar.vue'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import Loading from '../components/ui/Loading.vue'
import AuxilioSection from '../components/ui/auxilios/AuxilioSection.vue'

const auxilios = ref([])
const searchResults = ref([])
const loading = ref(true)
const page = ref(1)

const PER_PAGE = 6


onMounted(async () => {
  const { data } = await api.get('/auxilios/all')
  auxilios.value = data
  loading.value = false
})

watch(searchResults, () => {
  page.value = 1
})

const filtered = computed(() => {
  let base = searchResults.value.length
    ? searchResults.value
    : auxilios.value

  return base
})

</script>


<template>
    <TheHeader class="mb-15"></TheHeader>
  <div class="ui-container-xl px-6 sm:px-12 lg:px-28 space-y-10 mb-25">
    <h1 class="text-heading font-text text-4xl sm:text-5xl font-bold">Auxílios</h1>
    <SearchBar
      :items="auxilios"
      searchKey="titulo"
      @results="searchResults = $event"
    />

    <div class="flex flex-col lg:flex-row-reverse gap-10 lg:gap-6">
    
          <div class="flex-1 space-y-12">
    
            <section>

                <AuxilioSection v-if="!loading"
                    :auxilios="auxilios"
                    :perPage="PER_PAGE"
                    :page="page"
                    @page-change="page = $event"
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