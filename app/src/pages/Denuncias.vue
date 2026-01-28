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

    const images = ref([])

    function handleImages(event) {
        const files = Array.from(event.target.files)

        if (files.length + images.value.length > 3) {
            alert('Pode anexar até 3 imagens')
            return
        }

        files.forEach(file => {
            if (!file.type.startsWith('image/')) return

            ...
        })
    }

    async function submitDenuncia() {
        loading.value = true

        try {
            const data = new FormData()
            data.append('titulo', form.value.titulo)
            data.append('endereco', form.value.endereco)
            data.append('descricao', form.value.descricao)
            data.append('data', form.value.data)
            data.append('tipo', form.value.tipo)

            await api.post('/denuncias/create', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })

        } catch (err) {
            console.log(err)
            alert('Erro ao enviar')
        } finally {
            loading.value = false
        }
    }
    

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
                <input v-model="titulo" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Título descrevendo brevemente a denúncia" />
            </div>
            
            <div class="flex flex-col gap-2">
                <label class="font-bold">Endereço</label>
                <input v-model="endereco" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Rua das tortinhas, 650" />
            </div>

            <div class="flex flex-col gap-2">
                <label class="font-bold">Descrição</label>
                <textarea v-model="descricao" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Digite a descrição da denúncia" />
            </div>

            <div class="flex flex-col gap-2">
                <label class="font-bold">Data</label>
                <input type="date" v-model="data" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="dd / mm / yyyy" />
            </div>
            
            <div class="flex flex-col gap-2">
                <label class="font-bold">Tipo</label>
                <select v-model="form.tipo" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm">
                    <option value="">Selecione o tipo da denúncia</option>
                    <option value="saneamento">Saneamento Básico</option>
                    <option value="social">Social</option>
                    <option value="ambiental">Ambiental</option>
                </select>
            </div>

            <div>
                <input type="file" @change="">
            </div>

            <BaseButton type="button" color="blue" @click="" class="w-full">ENVIAR DENÚNCIA</BaseButton>
        </div>
    </main>

    <TheFooter class="mb-15"></TheFooter>
</template>