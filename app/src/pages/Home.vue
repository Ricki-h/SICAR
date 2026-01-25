<script setup>
    import { computed, onMounted, ref } from 'vue';
    import Hero from '../components/ui/Hero.vue';
    import SearchBar from '../components/ui/SearchBar.vue';
    import TheFooter from '../components/ui/TheFooter.vue';
    import TheHeader from '../components/ui/TheHeader.vue';
    import api from '../services/api';
    import ServiceCard from '../components/ui/servico/ServiceCard.vue';
    import BaseButton from '../components/ui/BaseButton.vue';

const services = ref([])

const loadData = async () => {
  try {
    const { data } = await api.get('/servicos/all')
    services.value = Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Erro ao carregar serviços:', error)
  }
}

onMounted(loadData)

const randomServices = computed(() => {
    if(!services.value.length) return []
    
    const aleatorio = [...services.value].sort(() => Math.random() - 0.5)

    return aleatorio.slice(0, 4)
})
</script>

<template>
    <TheHeader/>

    <Hero/>

    <main class="mt-4">
        <SearchBar class="lg:max-w-360 mx-auto px-6 sm:px-12 lg:px-28 mb-10"
        :items="todos" search-key="nome" placeholder="Pesquisar..." @search="(query, results) => console.log('Pesquisou:', query, results)" @results="(results) => resultadosFiltrados = results" @voice="() => console.log('Voice ativado')"/>
        
        <section class="ui-container-xl px-6 sm:px-12 lg:px-28 flex flex-col items-center gap-10">
            <div class="lg:text-center flex flex-col gap-1 text-center">
                <h2 class="font-title text-orange-600 font-bold text-4xl">SERVIÇOS</h2>
                <h6 class="text-text font-text">Acesse os melhores serviços para você</h6>
            </div>
            <div v-if="randomServices.length" class="flex sm:justify-evenly gap-4 flex-wrap justify-center">
                <ServiceCard
                v-for="service in randomServices"
                :key="service.id"
                :service="service"
                />
            </div>

            <BaseButton color="orange" to="/services" class="lg:max-w-96 sm:max-w-78 w-full">TODOS OS SERVIÇOS</BaseButton>

        </section>

    </main>

    <TheFooter class="mt-15"/>
</template>
