<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import SearchBar from '../components/ui/SearchBar.vue'
import api from '../services/api'
import BaseButton from '../components/ui/BaseButton.vue'
import Loading from '../components/ui/Loading.vue'

const route = useRoute()
const emprego = ref(null)

const copied = ref(false)
const link = `http://localhost:5173/vagas/${route.params.id}`
const copyLink = async() => {
    navigator.clipboard.writeText(link).then(() => {
        copied.value = true
        setTimeout(() => copied.value = false, 2000)
    })
}
const share = async () => {
  if (navigator.share) {
    await navigator.share({
      title: emprego.value.Titulo,
      url: link
    })
  } else {
    copyLink()
  }
}

const loadEmprego = async () => {
  try {
    const { data } = await api.get(`/empregooportunidade/${route.params.id}`)
    emprego.value = data
  } catch (error) {
    console.error('Erro ao buscar serviço:', error)
  }
}

const views = ref(0)

const countView = () => {
  const vagaId = route.params.id

  const viewedKey = `vaga_${vagaId}_viewed`
  const totalKey = `vaga_${vagaId}_views_total`

  const alreadyViewed = localStorage.getItem(viewedKey)
  const totalViews = Number(localStorage.getItem(totalKey)) || 0

  if (!alreadyViewed) {
    localStorage.setItem(totalKey, totalViews + 1)
    localStorage.setItem(viewedKey, 'true')
    views.value = totalViews + 1
  } else {
    views.value = totalViews
  }
}

onMounted(async () => {
  await loadEmprego()
  countView()
})
</script>


<template>
    <TheHeader class="mb-15"/>

    <main class="mb-25">
        <h1 class="text-heading font-text text-4xl sm:text-5xl font-bold mb-4 lg:max-w-360 mx-auto px-6 sm:px-12 lg:px-28">Serviços</h1>

        <SearchBar class="mb-15 lg:max-w-360 mx-auto px-6 sm:px-12 lg:px-28"
        :items="todos" search-key="nome" placeholder="Pesquisar..." @search="(query, results) => console.log('Pesquisou:', query, results)" @results="(results) => resultadosFiltrados = results" @voice="() => console.log('Voice ativado')"/>

        <div v-if="emprego" class="flex flex-col gap-4">
            <div class="relative">
                <div class="w-full h-80 bg-blue-900"></div>
                <div class="lg:max-w-360 mx-auto px-6 sm:px-12 lg:px-28 flex absolute bottom-[0px]">
                    <img :src="emprego.Icone" alt="" class="w-40 border-10 p-2 border-blue-900 rounded-full bg-[#FAFAFA]">
                </div>
                <div class="w-full flex flex-col lg:max-w-360 mx-auto px-6 sm:px-12 mb-5 lg:px-28 items-end mt-4 relative">
                    <button class="hover:cursor-pointer" @click="copyLink">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="currentColor" stroke="currentColor" class="fill-button stroke-button hover:fill-blue-500 transition duration-300 hover:stroke-blue-500">
                            <path d="M23.2998 1.57422C23.6676 1.42373 24.076 1.5079 24.3467 1.77734L38.2227 15.5889L38.2285 15.5938C38.5877 15.9475 38.5958 16.5339 38.2227 16.9053L24.3467 30.7168C24.076 30.986 23.6675 31.0694 23.2998 30.9189C22.951 30.7761 22.7217 30.4348 22.7217 30.0527V21.2412H18.1104C12.6973 21.2412 8.29504 25.6127 8.29492 31.0176C8.29492 33.8431 9.64684 35.4953 10.8984 36.3633L10.8994 36.3643C11.1357 36.5279 11.3183 36.7083 11.4316 36.874C11.5418 37.0353 11.5596 37.1396 11.5596 37.1924C11.5595 37.3526 11.4212 37.5 11.2432 37.5H10.9883C10.8909 37.5 10.8672 37.4847 10.8818 37.4912L10.873 37.4873L10.8633 37.4834L10.4873 37.3115C9.45406 36.8212 7.39665 35.6987 5.51074 33.8154C3.37675 31.6843 1.5 28.6235 1.5 24.376C1.50008 17.1374 7.40307 11.252 14.6924 11.252H22.7217V2.44043C22.7217 2.05831 22.9509 1.71704 23.2998 1.57422Z" stroke-width="3"/>
                        </svg>
                    </button>
                    <span v-if="copied" class="p-2 px-4 bg-bg-blue text-medium font-text text-title max-w-35 absolute top-12">Link Copiado!</span>
                </div>
            </div>
            <div class=" lg:max-w-360 px-6 sm:px-12 lg:px-28">
                <h3 class="text-4xl font-title text-heading font-bold">{{ emprego.Titulo }}</h3>
            </div>
        </div>
        <div v-else class="w-full flex items-center justify-center">
            <Loading/>

        </div>
    </main>

    <TheFooter/>
</template>