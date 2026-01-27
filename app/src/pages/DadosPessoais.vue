<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import api from '../services/api'

import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const authStore = useAuthStore()

const loading = ref(false)
const error = ref(null)
const success = ref(false)

const form = reactive({
    cpf: authStore.user?.cpf || '',
    nome: authStore.user?.nome || '',
    email: authStore.email?.nome || '',
    telefone: authStore.telefone?.nome || '',
    endereco: authStore.user?.endereco || '',
})

const submit = async() => {
    error.value = null
    success.value = false

    try {
        loading.value = true
        const { data } = await api.patch('usuarios/me', form)
        authStore.user = data
        success.value = true
    } catch (err) {
        error.value = 'Erro ao atualizar os dados (tente novamente).'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <TheHeader class="mb-15" />

    <main class="flex flex-col">

        <div></div>

        <form class="flex flex-col gap-6" @submit.prevent="submit">
            <div>
                <label>CPF</label>
                <input type="text" v-model="form.cpf" placeholder="000.000.000-00">
            </div>

            <div>
                <label>Nome</label>
                <input type="text" v-model="form.nome">
            </div>

            <div>
                <label>Email</label>
                <input type="email" v-model="form.email">
            </div>

            <div>
                <label>Telefone</label>
                <input type="text" v-model="form.telefone">
            </div>

            <div>
                <label>Endereço</label>
                <input type="text" v-model="form.endereco">
            </div>

            <BaseButton to="/">{{ loading ? 'Salvando' : 'Salvar alterações' }}</BaseButton>
        </form>
    
    </main>

    <TheFooter class="mb-15" />
</template>