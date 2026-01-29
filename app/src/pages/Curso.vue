<script setup>
import { ref, onMounted, computed } from 'vue'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import api from '../services/api'
import BaseButton from '../components/ui/BaseButton.vue'
import Loading from '../components/ui/Loading.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const curso = ref(null)

const loadCurso = async () => {
  try {
    const { data } = await api.get(`/cursos/${route.params.id}`)
    if (!data || !data.id) {
      router.replace('/404')
      return
    }
    curso.value = data
  } catch (error) {
    router.replace('/404')
  }
}

onMounted(loadCurso)
</script>

<template>
    <TheHeader class="mb-15"/>

    <main v-if="curso" class="mb-25 font-text flex flex-col gap-15 font-text">
        <div class="bg-black-blue py-10">
            <div class="ui-container-xl mx-auto px-6 sm:px-12 lg:px-28 ">
                <div class="flex flex-col-reverse lg:flex-row lg:justify-between gap-8 lg:gap-4 lg:items-center">
                    <div class="flex flex-col gap-8">
                        <div class="flex flex-col gap-3 w-full">
                            <span class="text-white px-3 py-1 text-sm rounded-full border border-white w-fit">{{ curso.area }}</span>
                            <h2 class="font-title text-2xl sm:text-3xl font-bold text-white">{{ curso.titulo }}</h2>
                            <p class="text-blue-300 font-medium lg:text-lg">{{ curso.subtitulo }}</p>
                            <p class="text-[#c5d5e0] text-sm lg:text-base"><b>Desenvolvido por: </b>{{ curso.desenvolvedor }}</p>
                        </div>
                        <BaseButton color="orange" class="w-full lg:w-50">Inscrever-se</BaseButton>
                    </div>
                    <div class="w-full lg:max-w-122">
                        <img :src="curso.foto" alt="" class="w-full">
                    </div>
                </div>
            </div>
        </div>

        <div class="ui-container-xl mx-auto px-6 sm:px-12 lg:px-28 flex flex-col lg:flex-row gap-8">
            <div class="flex flex-col gap-10 w-full">
                <div class="flex flex-col gap-6">
                    <h3 class="text-2xl text-title font-bold">Descrição do curso</h3>
                    <p class="text-text leading-7 text-sm text-justify">{{ curso.descricao }}</p>
                </div>
                <div class="flex flex-col gap-6">
                    <h3 class="text-2xl text-title font-bold">Requisitos</h3>
                    <p class="text-text leading-7 text-sm">{{ curso.requisitos ? curso.requisitos : 'Esse curso não tem requisitos' }}</p>
                </div>
            </div>
            <div class="flex flex-col gap-10 w-full">
                <div class="flex flex-col gap-6">
                    <h3 class="text-2xl text-title font-bold">Professor(es)</h3>
                    <div v-for="prof in curso.Professors">
                        <div class="flex items-center gap-3">
                            <div class="rounded-full overflow-hidden">
                                <img :src="prof.icon" alt="icon" class="w-full object-fill">
                            </div>
                            <div class="flex flex-col gap-1">
                                <h6 class="font-medium text-title">{{ prof.nome }}</h6>
                                <p class="text-sm text-text">{{ prof.profissao }}</p>
                            </div>
                        </div>
                        <p class="text-sm text-text leading-7 mt-2">{{ prof.descricao }}</p>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h3 class="text-2xl text-title font-bold">Informações importantes</h3>
                    <div class="flex justify-between gap-2 flex-wrap">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44" viewBox="0 0 40 44" fill="currentColor" class="fill-title">
                            <path d="M21.8571 17.2904C21.8571 16.9481 21.7066 16.6199 21.4387 16.3779C21.1708 16.136 20.8074 16 20.4286 16C20.0497 16 19.6863 16.136 19.4184 16.3779C19.1505 16.6199 19 16.9481 19 17.2904V24.7746H10.4286C10.0497 24.7746 9.68633 24.9105 9.41842 25.1525C9.15051 25.3945 9 25.7227 9 26.065C9 26.4072 9.15051 26.7354 9.41842 26.9774C9.68633 27.2194 10.0497 27.3553 10.4286 27.3553H20.4286C20.8074 27.3553 21.1708 27.2194 21.4387 26.9774C21.7066 26.7354 21.8571 26.4072 21.8571 26.065V17.2904Z"/>
                            <path d="M15.7167 1.41942C15.7167 1.04296 15.8672 0.68193 16.1352 0.415737C16.4031 0.149545 16.7664 0 17.1453 0H22.8596C23.2385 0 23.6018 0.149545 23.8697 0.415737C24.1376 0.68193 24.2882 1.04296 24.2882 1.41942C24.2882 1.79587 24.1376 2.1569 23.8697 2.4231C23.6018 2.68929 23.2385 2.83883 22.8596 2.83883V4.45697C26.7453 5.01338 30.271 6.67126 33.0996 9.11265C33.1108 9.10021 33.1223 9.08791 33.1339 9.07575L34.1453 8.0708L33.1339 7.06869C32.8656 6.80254 32.7148 6.44141 32.7145 6.06475C32.7142 5.68809 32.8646 5.32675 33.1324 5.06022C33.4003 4.79369 33.7638 4.64381 34.1428 4.64354C34.5219 4.64328 34.8856 4.79265 35.1539 5.0588L39.1939 9.07575C39.3303 9.20669 39.4391 9.36331 39.514 9.53649C39.5889 9.70966 39.6283 9.89592 39.6299 10.0844C39.6316 10.2729 39.5954 10.4598 39.5236 10.6342C39.4518 10.8086 39.3457 10.9671 39.2116 11.1004C39.0774 11.2337 38.9179 11.3391 38.7424 11.4104C38.5668 11.4818 38.3787 11.5177 38.189 11.5161C37.9993 11.5144 37.8119 11.4753 37.6376 11.4009C37.4633 11.3265 37.3056 11.2184 37.1739 11.0828L36.1653 10.0779L35.1539 11.0828C35.1417 11.0944 35.1293 11.1057 35.1167 11.1169C38.0258 14.4535 39.7339 18.6576 39.9714 23.0658C40.2089 27.474 38.9624 31.8352 36.4285 35.4614C33.8946 39.0876 30.2176 41.7722 25.9777 43.0916C21.7379 44.4111 17.1765 44.2902 13.0135 42.7481C8.85042 41.206 5.32267 38.3305 2.98691 34.5752C0.65114 30.82 -0.359658 26.3989 0.114011 22.0096C0.58768 17.6203 2.51885 13.5126 5.60278 10.3348C8.68672 7.15696 12.7478 5.08991 17.1453 4.45981V2.83883C16.7664 2.83883 16.4031 2.68929 16.1352 2.4231C15.8672 2.1569 15.7167 1.79587 15.7167 1.41942ZM20.0024 7.09708C17.7512 7.09727 15.5221 7.53803 13.4423 8.39419C11.3625 9.25035 9.47277 10.5051 7.88104 12.0869C4.6664 15.2815 2.86065 19.6141 2.86103 24.1315C2.86141 28.6489 4.66789 32.9812 7.88306 36.1752C11.0982 39.3693 15.4587 41.1635 20.0053 41.1631C24.5519 41.1627 28.9121 39.3678 32.1267 36.1732C35.3413 32.9787 37.1471 28.6461 37.1467 24.1287C37.1463 19.6112 35.3399 15.279 32.1247 12.0849C28.9095 8.89089 24.549 7.09671 20.0024 7.09708Z"/>
                            </svg>

                            <div class="flex flex-col items-center">
                                <p class="text-title font-semibold">Carga horária</p>
                                <span class="text-sm text-text">{{ curso.carga_horaria }}</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none" stroke="currentColor" class="stroke-title">
                            <path d="M15.5 37.5H9.50002C7.37829 37.5 5.34345 36.6571 3.84315 35.1568C2.34286 33.6565 1.5 31.6217 1.5 29.5V11.5C1.5 9.37822 2.34286 7.34338 3.84315 5.84309C5.34345 4.3428 7.37829 3.49995 9.50002 3.49995H31.5001C33.6218 3.49995 35.6567 4.3428 37.157 5.84309C38.6573 7.34338 39.5001 9.37822 39.5001 11.5V17.5M13.5 1.5V5.5M27.5 1.5V5.5M1.5 13.5H39.5001M34.5 28.7861L31.5 31.7861M41.5001 31.5C41.5001 37.0229 37.0229 41.5 31.5 41.5C25.9772 41.5 21.5 37.0229 21.5 31.5C21.5 25.9772 25.9772 21.5 31.5 21.5C37.0229 21.5 41.5001 25.9772 41.5001 31.5Z"stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <div class="flex flex-col items-center">
                                <p class="text-title font-semibold">Duração</p>
                                <span class="text-sm text-text">{{ curso.duracao }}</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" class="fill-title">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.368 0.187207C39.5611 0.299194 39.7206 0.455574 39.8312 0.641519C39.9418 0.827464 39.9999 1.03681 40 1.24972V38.75C40 39.0815 39.8595 39.3995 39.6095 39.6339C39.3594 39.8683 39.0203 40 38.6667 40H30.6667C30.313 40 29.9739 39.8683 29.7239 39.6339C29.4738 39.3995 29.3333 39.0815 29.3333 38.75V35H26.6667V38.75C26.6667 39.0815 26.5262 39.3995 26.2761 39.6339C26.0261 39.8683 25.687 40 25.3333 40H1.33333C0.979711 40 0.640573 39.8683 0.390524 39.6339C0.140476 39.3995 0 39.0815 0 38.75V24.9999C0.000212391 24.7376 0.0883949 24.4821 0.252067 24.2694C0.415738 24.0568 0.646608 23.8978 0.912 23.8149L16 19.0998V11.2498C16 11.0178 16.0689 10.7905 16.1988 10.5931C16.3288 10.3958 16.5148 10.2362 16.736 10.1323L38.0693 0.132207C38.2728 0.0367209 38.499 -0.00835358 38.7263 0.00127371C38.9536 0.010901 39.1745 0.0749097 39.368 0.187207ZM16 21.7349L2.66667 25.8999V37.5H16V21.7349ZM18.6667 37.5H24V33.75C24 33.4184 24.1405 33.1005 24.3905 32.8661C24.6406 32.6316 24.9797 32.4999 25.3333 32.4999H30.6667C31.0203 32.4999 31.3594 32.6316 31.6095 32.8661C31.8595 33.1005 32 33.4184 32 33.75V37.5H37.3333V3.27223L18.6667 12.0223V37.5Z"/>
                            <path d="M5.3335 27.5002H8.00016V30.0002H5.3335V27.5002ZM10.6668 27.5002H13.3335V30.0002H10.6668V27.5002ZM5.3335 32.5002H8.00016V35.0003H5.3335V32.5002ZM10.6668 32.5002H13.3335V35.0003H10.6668V32.5002ZM21.3335 22.5002H24.0002V25.0002H21.3335V22.5002ZM26.6668 22.5002H29.3335V25.0002H26.6668V22.5002ZM21.3335 27.5002H24.0002V30.0002H21.3335V27.5002ZM26.6668 27.5002H29.3335V30.0002H26.6668V27.5002ZM32.0002 22.5002H34.6668V25.0002H32.0002V22.5002ZM32.0002 27.5002H34.6668V30.0002H32.0002V27.5002ZM21.3335 17.5001H24.0002V20.0001H21.3335V17.5001ZM26.6668 17.5001H29.3335V20.0001H26.6668V17.5001ZM32.0002 17.5001H34.6668V20.0001H32.0002V17.5001ZM21.3335 12.5001H24.0002V15.0001H21.3335V12.5001ZM26.6668 12.5001H29.3335V15.0001H26.6668V12.5001ZM32.0002 12.5001H34.6668V15.0001H32.0002V12.5001ZM32.0002 7.50005H34.6668V10.0001H32.0002V7.50005Z"/>
                            </svg>

                            <div class="flex flex-col items-center">
                                <p class="text-title font-semibold">Modalidade</p>
                                <span class="text-sm text-text">{{ curso.modalidade }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div v-else class="flex w-full py-10 items-center justify-center">
        <Loading/>
    </div>

    <TheFooter/>
</template>