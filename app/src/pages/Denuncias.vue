<script setup>
    import { ref, onMounted } from 'vue'
    import { useAuthStore } from '../stores/auth'
    import api from '../services/api'
    import BaseLink from '../components/ui/BaseLink.vue'
    import BaseButton from '../components/ui/BaseButton.vue'
    import Loading from '../components/ui/Loading.vue'
    import TheFooter from '../components/ui/TheFooter.vue'
    import TheHeader from '../components/ui/TheHeader.vue'

    const auth = useAuthStore()

    const form = ref({
        nome: '',
        email: '',
        telefone: '',
        endereco: ''
    })

    const loading = ref(false)
    const preview = ref(null)

    

</script>

<template>
    <TheHeader class="mb-15"></TheHeader>

    <main class="max-w-7xl sm:mx-auto flex-col flex gap-6 mx-6">
        <div class="border-b flex flex-col gap-1">
            <h1 class=" text-3xl md:text-5xl font-bold text-blue-600">Denúncia</h1>
            <p class="mb-4">Denuncie problemas estruturais ou sociais da sua cidade</p>
        </div>
        <div class=" flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                <label class="font-bold">Título</label>
                <input class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Título descrevendo brevemente a denúncia" />
            </div>
            
            <div class="flex flex-col gap-2">
                <label class="font-bold">Endereço</label>
                <input class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Rua das tortinhas, 650" />
            </div>

            <div class="flex flex-col gap-2">
                <label class="font-bold">Descrição</label>
                <input class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Digite a descrição da denúncia" />
            </div>

            <div class="flex flex-col gap-2">
                <label class="font-bold">Data</label>
                <input class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="dd / mm / yyyy" />
            </div>
            
            <div class="flex flex-col gap-2">
                <label class="font-bold">Tipo</label>
                <input class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Selecione o tipo da denúncia" />
            </div>

            <BaseButton type="button" color="blue" @click="" class="w-full">ENVIAR DENÚNCIA</BaseButton>
        </div>
    </main>

    <TheFooter class="mb-15"></TheFooter>
</template>