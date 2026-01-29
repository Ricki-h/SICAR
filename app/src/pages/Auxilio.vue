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
const auxilio = ref(null)
const open = ref(false)



const loadAuxilio = async () => {
  try {
    const { data } = await api.get(`/auxilios/${route.params.id}`)
    if (!data || !data.id) {
      router.replace('/404')
      return
    }
    auxilio.value = data
  } catch (error) {
    router.replace('/404')
  }
}
const solicitar = async () => {
  try {
    if (!auxilio.value?.id) {
      console.warn('Auxílio ainda não carregado')
      return
    }

    await api.post('/auxilios/solicitar', {
      auxilio_id: auxilio.value.id
    })

    open.value = true
    setTimeout(() => open.value = false, 2000)

  } catch (error) {
    console.error('Erro ao solicitar auxilio:', error)
  }
}

const valorFormatado = computed(() => {
  if (!auxilio.value?.valor) return ''

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(auxilio.value.valor))
})


onMounted(loadAuxilio)
</script>


<template>
    <TheHeader class="mb-15"/>

    <main v-if="auxilio" class="ui-container-xl mx-auto px-6 sm:px-12 lg:px-28 mb-25 font-text flex flex-col gap-15">
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <div class="flex gap-3 items-center">
                    <span class="bg-button text-btn-text px-3 py-1 rounded-full font-medium text-xs">{{ valorFormatado }}</span>
                    <span class="border-button border text-button px-3 py-1 rounded-full font-medium text-xs">{{ auxilio.tipo }}</span>
                </div>
                <h2 class="font-title text-heading text-3xl sm:text-5xl font-bold">{{ auxilio.titulo }}</h2>
            </div>
            <BaseButton color="orange w-46" @click="solicitar">Adquirir Auxílio</BaseButton>
            <hr class="w-full border-clarinho">
        </div>

        <div>
            <div class="flex flex-col gap-6">
                <h3 class="text-2xl text-title font-bold">Descrição do auxílio</h3>
                <p class="leading-7 text-text">{{ auxilio.descricao }}</p>
            </div>
        </div>
    </main>
    <div v-else class="flex w-full py-10 items-center justify-center">
        <Loading/>
    </div>
    <div v-if="open" class="bg-black/50 w-full min-h-full fixed top-0 flex justify-center items-center">
        <div class="p-6 max-w-90 h-60 w-full bg-bg-blue text-center flex justify-center items-center rounded-lg flex-col gap-6">
            <h4 class="text-4xl">✔</h4>
            <h4 class="font-bold text-orange-600 text-2xl">{{ `${auxilio.titulo} Solicitado com sucesso!` }}</h4>
        </div>
    </div>

    <TheFooter/>
</template>