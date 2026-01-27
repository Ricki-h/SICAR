<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import SearchBar from '../components/ui/SearchBar.vue'
import api from '../services/api'
import Badge from '../components/ui/Badge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import Loading from '../components/ui/Loading.vue'

const route = useRoute()
const service = ref(null)

const loadService = async () => {
  try {
    const { data } = await api.get(`/servicos/${route.params.id}`)
    service.value = data
  } catch (error) {
    console.error('Erro ao buscar serviço:', error)
  }
}

onMounted(loadService)
</script>


<template>
    <TheHeader class="mb-15"/>

    <main class="lg:max-w-360 mx-auto px-6 sm:px-12 lg:px-28 mb-25">
        <h1 class="text-heading font-text text-4xl sm:text-5xl font-bold mb-4">Serviços</h1>

        <SearchBar class="mb-10"
        :items="todos" search-key="nome" placeholder="Pesquisar..." @search="(query, results) => console.log('Pesquisou:', query, results)" @results="(results) => resultadosFiltrados = results" @voice="() => console.log('Voice ativado')"/>

        <div v-if="service" class="flex flex-col gap-4">
            <div>
                <Badge class="border border-button hover:bg-button hover:text-btn-text transition duration-300 hover:cursor-pointer">{{ service.CategoriaServico.nome }}</Badge>
                <h2 class="font-title font-bold text-2xl sm:text-3xl text-title mt-2">{{ service.nome }}</h2>
            </div>

            <BaseButton color="neutral" class="max-w-50 w-full">Realizar Serviço</BaseButton>

            <hr class="border-clarinho w-full">

            <div>
                <div tabindex="0" class="collapse collapse-plus bg-bg font-text">
                    <div class="collapse-title sm:text-xl text-base text-title font-semibold">O que é esse serviço</div>
                    <div class="collapse-content text-text text-sm sm:text-base">
                        {{ service.descrição }}
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus bg-bg font-text">
                    <div class="collapse-title sm:text-xl text-base text-title font-semibold">Quem pode utilizar esse serviço</div>
                    <div class="collapse-content text-text text-sm sm:text-base">
                        {{ service.publico }}
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus bg-bg font-text">
                    <div class="collapse-title sm:text-xl text-base text-title font-semibold">Etapas de realização</div>
                    <div class="collapse-content text-text text-sm sm:text-base">
                        {{ service.etapas }}
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus bg-bg font-text">
                    <div class="collapse-title sm:text-xl text-base text-title font-semibold">Outras informações</div>
                    <div class="collapse-content text-text text-sm sm:text-base">
                        {{ service.infoExtra }}
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