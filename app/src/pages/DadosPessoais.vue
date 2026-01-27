<script>
import { reactive, ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import api from '../services/api'

import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
// import BaseButton from '@/components/ui/BaseButtons.vue'

const authStore = useAuthStore()

const loading = ref(false)
const error = ref(null)
const success = ref(false)

const form = reactive({
    nome: authStore.user?.nome || '',
    email: authStore.email?.nome || '',
    telefone: authStore.telefone?.nome || ''
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
    <div>
        
    </div>
</template>