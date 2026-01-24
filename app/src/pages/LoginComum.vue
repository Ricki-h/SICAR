<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '../stores/auth'
    import api from '../services/api'
    import BaseButton from '../components/ui/BaseButton.vue';

    const cpf = ref('');
    const senha = ref('');
    const loading = ref(false);
    const error = ref(null);

    const auth  = useAuthStore()
    const router = useRouter()

    const submit = async() => {
        error.value = null;
        loading.value = true;

        try {
            const { data } = await api.post('/usuarios/login/comum', {
                cpf: cpf.value,
                senha: senha.value,
            });

            auth.setToken(data.token)

            await auth.fetchUser()

            router.push('/')
        } catch (e) {
            error.value = 'CPF ou senha inválidos'
        } finally {
            loading.value = false
        }
    }
</script>

<template>
    <h1 class="text-title text-2xl font-title font-bold">
        Login
    </h1>

    <div class="bg-bg">
        <form @submit.prevent="submit" class="w-full max-w-sm bg-bg rounded-xl p-6 shadow-md">
            <div>
                <label class="block text-sm mb-1 text-title">CPF</label>
                <input
                v-model="cpf"
                type="text"
                class="w-full px-4 py-2 rounded-lg border border-clarinho text-text"
                />
            </div>

            <div>
                <label class="block text-sm mb-1 text-title">Senha</label>
                <input
                v-model="senha"
                type="password"
                class="w-full px-4 py-2 rounded-lg border border-clarinho text-text"
                />
            </div>

            <p v-if="error" class="text-sm text-red-600 mb-4">
                {{ error }}
            </p>

            <BaseButton type="submit" color="orange" :disabled="loading">{{ loading ? 'Entrando...' : 'Entrar' }}</BaseButton>
        </form>
    </div>
</template>
