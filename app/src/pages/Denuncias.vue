<script setup>
    import { ref } from 'vue'
    import api from '../services/api'
    import BaseButton from '../components/ui/BaseButton.vue'
    import TheFooter from '../components/ui/TheFooter.vue'
    import TheHeader from '../components/ui/TheHeader.vue'

    const form = ref({
        titulo: '',
        descricao: '',
        data: '',
        endereco: '',
        tipo: ''
    })

    const loading = ref(false)

    const previews = ref([])
    const images = ref([])

    function handleImages(event) {
        const files = Array.from(event.target.files)

        if (files.length + images.value.length > 3) {
            alert('Pode anexar até 3 imagens')
            event.target.value = ''
            return
        }

        files.forEach(file => {
            if (!file.type.startsWith('image/')) return

            images.value.push(file)
            previews.value.push(URL.createObjectURL(file))
        })
    }

    function removeImage(index) {
        images.value.splice(index, 1)
        previews.value.splice(index, 1)   
    }

    async function submitDenuncia() {
        loading.value = true

        if (
            !form.value.titulo ||
            !form.value.descricao ||
            !form.value.endereco ||
            !form.value.data ||
            !form.value.tipo
        ) {
            alert('Preencha os campos obrigatórios')
            loading.value = false
            return
        }

        try {
            const data = new FormData()
            data.append('titulo', form.value.titulo)
            data.append('local', form.value.endereco)
            data.append('descricao', form.value.descricao)
            data.append('data', form.value.data)
            data.append('tipo', form.value.tipo)

            images.value.forEach(file => {
                data.append('fotos', file)
            })

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

    <main class="max-w-7xl xl:mx-auto flex-col flex gap-6 mx-6">
        <div class="border-b border-clarinho flex flex-col gap-1">
            <h1 class=" text-3xl md:text-5xl font-bold text-blue-600">Denúncia</h1>
            <p class="mb-4 text-text">Denuncie problemas estruturais ou sociais da sua cidade</p>
        </div>
        <form class="grid grid-cols-1 sm:grid-cols-2 gap-4" @submit.prevent="submitDenuncia">
            <div class="flex flex-col gap-2">
                <label class="font-bold text-text">Título</label>
                <input required="" v-model="form.titulo" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Título descrevendo brevemente a denúncia" />
            </div>
            
            <div class="flex flex-col gap-2">
                <label class="font-bold text-text">Endereço</label>
                <input required v-model="form.endereco" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Rua das tortinhas, 650" />
            </div>

            <div class="flex flex-col gap-2">
                <label class="font-bold text-text">Descrição</label>
                <textarea required v-model="form.descricao" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Digite a descrição da denúncia" />
            </div>

            <div class="flex flex-col gap-2">
                <label class="font-bold text-text">Data</label>
                <input required type="date" v-model="form.data" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="dd / mm / yyyy" />
            </div>
            
            <div class="flex flex-col gap-2 sm:order-2">
                <label class="font-bold text-text">Tipo</label>
                <select required v-model="form.tipo" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm">
                    <option value="">Selecione o tipo da denúncia</option>
                    <option value="saneamento">Saneamento Básico</option>
                    <option value="social">Social</option>
                    <option value="ambiental">Ambiental</option>
                </select>
            </div>

            <label class="border border-dashed flex flex-col items-center justify-center sm:order-1 p-6 border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600">
                <input type="file" accept="image/*" multiple class="hidden" @change="handleImages">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="79" viewBox="0 0 100 79" fill="none">
                    <path d="M7.62012 2H91.4404C94.5443 2 97.0605 4.51625 97.0605 7.62012V71.1201C97.0605 74.224 94.5443 76.7402 91.4404 76.7402H7.62012C4.51625 76.7402 2 74.224 2 71.1201V7.62012L2.00684 7.33105C2.15724 4.36148 4.61317 2 7.62012 2ZM54.2861 32.7852L43.125 47.374L38.3389 41.1182L36.75 39.042L35.1611 41.1182L22.4111 57.7852L19.9521 61H79.0479L76.5889 57.7852L57.4639 32.7852L55.875 30.708L54.2861 32.7852ZM70.9521 57H28.0479L36.75 45.625L41.5361 51.8818L43.125 53.958L44.7139 51.8818L55.875 37.291L70.9521 57ZM27 24.5C27 25.8807 25.8807 27 24.5 27C23.1193 27 22 25.8807 22 24.5C22 23.1193 23.1193 22 24.5 22C25.8807 22 27 23.1193 27 24.5ZM31 24.5C31 20.9101 28.0899 18 24.5 18C20.9101 18 18 20.9102 18 24.5C18 28.0898 20.9101 31 24.5 31C28.0899 31 31 28.0899 31 24.5Z" stroke="#14171B" stroke-width="4"/>
                </svg>
            </label>

            <div v-if="previews.length" class="flex flex-row gap-4">
                <div v-for="(img, index) in previews" :key="index" class="relative w-32 h-32 overflow-hidden border">
                    <img :src="img" class="h-full w-full object-cover">
                    <button type="button" @click="removeImage(index)" class="absolute top-1 right-1 rounded-full text-white bg-red-600 w-5 h-5 flex items-center justify-center"> x </button>
                </div>
            </div>

            <BaseButton type="submit" color="blue" :disabled="loading" class="w-full sm:order-3">{{ loading ? 'Enviando...' : 'ENVIAR DENÚNCIA' }}</BaseButton>
        </form>
    </main>

    <TheFooter class="mb-15"></TheFooter>
</template>