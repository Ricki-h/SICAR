<script setup>
import { ref, onMounted, computed } from 'vue'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import SearchBar from '../components/ui/SearchBar.vue'
import api from '../services/api'
import BaseButton from '../components/ui/BaseButton.vue'
import Loading from '../components/ui/Loading.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const emprego = ref(null)

const copied = ref(false)
const link = window.location.href
const copyLink = async() => {
    navigator.clipboard.writeText(link).then(() => {
        copied.value = true
        setTimeout(() => copied.value = false, 2000)
    })
}
// const share = async () => {
//   if (navigator.share) {
//     await navigator.share({
//       title: emprego.value.Titulo,
//       url: link
//     })
//   } else {
//     copyLink()
//   }
// }
const criada = (dateString) => {
  const criado = new Date(dateString)
  const now = new Date()

  const ms = now - criado
  const min = Math.floor(ms / 1000 / 60)
  const horas = Math.floor(min / 60)
  const dias = Math.floor(horas / 24)

  if (min < 1) return 'agora mesmo'
  if (min < 60) return `há ${min} minuto${min > 1 ? 's' : ''}`
  if (horas < 24) return `há ${horas} hora${horas > 1 ? 's' : ''}`
  if (dias < 7) return `há ${dias} dia${dias > 1 ? 's' : ''}`

  const semanas = Math.floor(dias / 7)
  return `há ${semanas} semana${semanas > 1 ? 's' : ''}`
}
const publicadoHa = computed(() => {
  if (!emprego.value?.createdAt) return ''
  return criada(emprego.value.createdAt)
})



const loadEmprego = async () => {
  try {
    const { data } = await api.get(`/empregooportunidade/${route.params.id}`)
    if (!data || !data.id) {
      router.replace('/404')
      return
    }
    emprego.value = data
  } catch (error) {
   router.replace('/404')
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
            <div class="relative w-full">
                <div class="w-full h-80 bg-blue-900"></div>
                <div class="lg:max-w-360 mx-auto px-6 sm:px-12 lg:px-28 flex  w-full">
                    <img :src="emprego.Icone" alt="" class=" absolute bottom-[0px] md:w-40 w-35 border-10 p-2 border-blue-900 rounded-full bg-[#FAFAFA]">
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
            <div class="lg:max-w-360 mx-auto w-full px-6 sm:px-12 lg:px-28 flex flex-col gap-10">
              <div class="flex flex-col gap-4">
                  <h3 class="md:text-4xl text-xl font-title text-heading font-bold">{{ emprego.Titulo }}</h3>
                  <h6 class="font-semibold text-title font-text text-sm md:text-xl">{{ `${emprego.Rua}${ emprego.Numero_local ? `, nº ${emprego.Numero_local}` : ''} - ${emprego.Bairro}, ${emprego.Cidade}/${emprego.UF_estado}` }}</h6>
                  <div class="flex flex-col-reverse md:flex-row md:items-center md:gap-10 gap-3">
                    <div class="flex items-center text-text font-text text-sm md:text-xl gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="fill-text w-4.5 md:w-5.5">
                        <path d="M21.75 12C21.75 17.3859 17.3859 21.75 12 21.75C6.61406 21.75 2.25 17.3859 2.25 12C2.25 6.61406 6.61406 2.25 12 2.25C17.3859 2.25 21.75 6.61406 21.75 12ZM0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12ZM10.875 5.625V12C10.875 12.375 11.0625 12.7266 11.3766 12.9375L15.8766 15.9375C16.3922 16.2844 17.0906 16.1437 17.4375 15.6234C17.7844 15.1031 17.6437 14.4094 17.1234 14.0625L13.125 11.4V5.625C13.125 5.00156 12.6234 4.5 12 4.5C11.3766 4.5 10.875 5.00156 10.875 5.625Z"/>
                      </svg>
                      <span>{{ `Anunciada ${publicadoHa}` }}</span>
                    </div>
                    <div class="flex items-center text-text font-text text-sm md:text-xl gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 31 24" fill="currentColor" stroke="none" class="stroke-text  h-4 md:h-5">
                        <path d="M15.5 1C19.5242 1 22.7746 2.82646 25.1846 5.05273C27.5849 7.26903 29.1911 9.93083 29.9443 11.7275C30.0181 11.9033 30.0181 12.0967 29.9443 12.2725C29.2385 13.9561 27.7829 16.3966 25.625 18.5264L25.1836 18.9482C22.7748 21.1785 19.5249 23 15.5 23C11.4758 23 8.2254 21.1735 5.81543 18.9473C3.4151 16.731 1.80886 14.0692 1.05566 12.2725C0.981931 12.0967 0.981931 11.9033 1.05566 11.7275C1.76147 10.0439 3.21712 7.60336 5.375 5.47363L5.81641 5.05176C8.22517 2.82151 11.4751 1 15.5 1ZM15.5 3.28613C10.6743 3.28613 6.75195 7.18468 6.75195 12C6.75195 16.8153 10.6743 20.7139 15.5 20.7139C20.3257 20.7139 24.248 16.8153 24.248 12C24.248 7.18468 20.3257 3.28613 15.5 3.28613ZM16.458 7.96582C17.9025 8.30741 19.1141 9.40586 19.5215 10.9248L19.5225 10.9258C20.1151 13.1317 18.8 15.4077 16.5771 16C14.351 16.5931 12.0657 15.2752 11.4727 13.0693L11.4717 13.0664C11.4618 13.03 11.4532 12.9934 11.4443 12.957C11.6449 12.9845 11.8493 13 12.0566 13C14.5041 12.9999 16.5 11.0187 16.5 8.57129C16.5 8.3656 16.4853 8.16353 16.458 7.96582Z" stroke-width="1"/>
                      </svg>
                      <span>{{ `${views} Visualizações` }}</span>
                    </div>
                  </div>
              </div>
              <div class="md:flex gap-6 hidden">
                <BaseButton size="xl" style="squared" variant="outline" color="blue" class="rounded-xl">Salvar</BaseButton>
                <BaseButton size="xl" style="squared" color="orange" class="rounded-xl">Candidatar-se</BaseButton>
              </div>
              <div class="flex gap-6 md:hidden">
                <BaseButton style="squared" variant="outline" color="blue" class="rounded-xl">Salvar</BaseButton>
                <BaseButton style="squared" color="orange" class="rounded-xl">Candidatar-se</BaseButton>
              </div>
            </div>
            <hr class="w-full border-clarinho my-10">
            <div class="lg:max-w-360 px-6 mx-auto sm:px-12 lg:px-28 grid lg:grid-cols-2 md:gap-30 gap-15 lg:justify-between w-full">
              <div class="flex flex-col gap-10 w-full">
                <div class="font-text">
                  <h4 class="text-2xl font-bold text-title mb-4">Descrição da Vaga</h4>
                  <p class="text-text pl-10 text-justify leading-7">{{ emprego.Descricao_Detalhada }}</p>
                </div>
                <div class="font-text">
                  <h4 class="text-2xl font-bold text-title mb-4">Requisitos da Vaga</h4>
                  <p class="text-text pl-10 text-justify leading-7">{{ emprego.Requisitos ? emprego.Requisitos : 'Essa vaga não tem requisitos' }}</p>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row flex-wrap sm:justify-between gap-10 w-full">
                <div class="font-text">
                  <h4 class="text-2xl font-bold text-title mb-2">Categoria</h4>
                  <div class="text-text flex items-center gap-2">
                    <div v-html="emprego.EmpregoCategorium.Icone" class="fill-text stroke-text"></div>
                    <span>{{ emprego.EmpregoCategorium.Nome }}</span>
                  </div>
                </div>
                <div class="font-text">
                  <h4 class="text-2xl font-bold text-title mb-2">Função</h4>
                  <div class="text-text flex items-center gap-2">
                    <span>{{ emprego.Titulo }}</span>
                  </div>
                </div>
                <div class="font-text">
                  <h4 class="text-2xl font-bold text-title mb-2">Carga Horária</h4>
                  <div class="text-text flex items-center gap-2">
                    <span>{{ `${emprego.Carga_Horaria} Horas semanais` }}</span>
                  </div>
                </div>
                <div class="font-text">
                  <h4 class="text-2xl font-bold text-title mb-2">Experiência</h4>
                  <div class="text-text flex items-center gap-2">
                    <span>{{ emprego.Experiencia ? emprego.Experiencia : 'Não é necessária experiência prévia.' }}</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div v-else class="w-full flex items-center justify-center">
            <Loading/>

        </div>
    </main>

    <TheFooter/>
</template>