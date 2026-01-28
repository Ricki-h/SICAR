<script setup>
import { reactive, ref, watch } from 'vue'
import { useAuthStore } from '../stores/auth'
import api from '../services/api'

import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseLink from '../components/ui/BaseLink.vue'

const onlyNumbers = (v) => v.replace(/\D/g, '')

const formatCPF = (v) => {
  const numbers = onlyNumbers(v).slice(0, 11)

  return numbers
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

const cpfValido = (cpf) => {
  cpf = onlyNumbers(cpf)

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false

  let sum = 0
  for (let i = 0; i < 9; i++) sum += cpf[i] * (10 - i)
  let d1 = (sum * 10) % 11
  if (d1 === 10) d1 = 0
  if (d1 != cpf[9]) return false

  sum = 0
  for (let i = 0; i < 10; i++) sum += cpf[i] * (11 - i)
  let d2 = (sum * 10) % 11
  if (d2 === 10) d2 = 0

  return d2 == cpf[10]
}

const authStore = useAuthStore()
const loading = ref(false)
const error = ref(null)
const success = ref(false)
const icon = ref(null)

const form = reactive({
    cpf: authStore.user?.cpf || '',
    nome: authStore.user?.nome || '',
    email: authStore.user?.email || '',
    telefone: authStore.user?.telefone || '',
    endereco: authStore.user?.endereco || '',
})

watch(() => form.cpf, (v) => {
    const formatted = formatCPF(v)
    if (formatted !== v)
    form.cpf = formatted
})

const submit = async() => {
    error.value = null
    success.value = false

    const cpfNumeros = onlyNumbers(form.cpf)
    if (!cpfValido(cpfNumeros)) {
        error.value = 'CPF inválido'
        loading.value = false
        return
    }

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

const onFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
        error.value = 'Envie apenas imagens'
        return
    }

    icon.value = file
}

const uploadFoto = async () => {
    if (!icon.value) return

    const formData = new FormData()
    formData.append('icon', icon.value)

    try {
        loading.value = true
        const { data } = await api.put('usuarios/update/icon', formData)
        authStore.user.icon = data.icon
        success.value = true
        icon.value = null
    } catch (err) {
        error.value = 'Erro ao enviar foto'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <TheHeader class="mb-15" />
    <div class="flex flex-row items-center justify-start gap-6 max-w-7xl pb-6 border-b mb-6 mx-auto">
        <BaseLink class="font-text" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                <path d="M5.07636 11.916L13.4122 20.2519C13.8041 20.6437 14 21.1424 14 21.748C14 22.3536 13.8041 22.8524 13.4122 23.2442C13.0204 23.6361 12.5216 23.832 11.916 23.832C11.3104 23.832 10.8117 23.6361 10.4199 23.2442L0.587817 13.4122C0.374077 13.1984 0.223034 12.9669 0.134688 12.7175C0.0463426 12.4682 0.00145782 12.201 3.28835e-05 11.916C-0.00139205 11.631 0.0434928 11.3638 0.134688 11.1145C0.225884 10.8651 0.376927 10.6336 0.587817 10.4198L10.4199 0.587784C10.8117 0.195927 11.3104 0 11.916 0C12.5216 0 13.0204 0.195927 13.4122 0.587784C13.8041 0.979641 14 1.47837 14 2.08396C14 2.68956 13.8041 3.18829 13.4122 3.58014L5.07636 11.916Z" fill="#14171B"/>
            </svg>
        </BaseLink>
        <h1 class="text-3xl text-blue-600 font-bold">Dados Pessoais</h1>
    </div>
    <main class="flex flex-col md:flex-row-reverse gap-8 px-6 md:px-10 justify-evenly max-w-7xl mx-auto overflow-x-hidden">

        <div class="gap-8 flex flex-col items-center w-full justify-center md:w-80">
            <img v-if="authStore.user?.icon" :src="authStore.user.icon" class="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover">
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover" width="162" height="162" viewBox="0 0 162 162" fill="none">
                <circle cx="80.7934" cy="80.7934" r="77.7934" stroke="#1B63F5" stroke-width="6"/>
                <circle cx="80.7933" cy="80.7935" r="71.5599" fill="#9C9C9C"/>
                <path d="M58.6532 86.1305C55.1468 87.8845 36.4948 102.729 36.5137 109.814C36.5211 112.584 44.816 136.824 80.7927 136.824C116.769 136.824 125.072 115.354 125.072 109.814C125.072 101.504 108.46 87.8269 105.7 86.1305C102.94 84.434 62.1596 84.3764 58.6532 86.1305Z" fill="black"/>
                <path d="M105.707 50.1136C105.707 63.8828 94.5558 75.0448 80.8001 75.0448C67.0444 75.0448 55.8932 63.8828 55.8932 50.1136C55.8932 36.3445 67.0444 25.1824 80.8001 25.1824C94.5558 25.1824 105.707 36.3445 105.707 50.1136Z" fill="black"/>
            </svg>
            <BaseButton color="orange" type="button" :disabled="loading" class="gap-2" @click="$refs.fileInput.click()"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"> <path d="M0 5.6C0 2.9603 -8.34465e-08 1.6401 0.8204 0.8204C1.6408 0.000699949 2.9603 0 5.6 0H8.4C11.0397 0 12.3599 -8.34465e-08 13.1796 0.8204C13.9993 1.6408 14 2.9603 14 5.6V8.4C14 11.0397 14 12.3599 13.1796 13.1796C12.3592 13.9993 11.0397 14 8.4 14H5.6C2.9603 14 1.6401 14 0.8204 13.1796C0.000699949 12.3592 0 11.0397 0 8.4V5.6Z" stroke="white" stroke-width="4"/></svg> {{ loading ? 'Salvando' : 'Alterar foto de perfil' }}</BaseButton>

            <input type="file" ref="fileInput" accept="image/*" class="hidden" @change="onFileChange">
            <BaseButton v-if="icon" color="blue" type="button" :disabled="loading" @click="uploadFoto">Enviar foto</BaseButton>
        </div>

        <form class="flex flex-col gap-6 md:max-w-xl w-full" @submit.prevent="submit" >
            <div class="flex flex-col gap-3 w-full">
                <label class="font-bold">CPF</label>
                <input type="text" v-model="form.cpf" placeholder="000.000.000-00" class="rounded-sm px-4 py-3 w-full">
            </div>

            <div class="flex flex-col gap-3 w-full">
                <label class="font-bold">Nome</label>
                <input type="text" v-model="form.nome" readonly class="rounded-sm px-4 py-3 w-full">
            </div>

            <div class="flex flex-col gap-3 w-full">
                <label class="font-bold">Email</label>
                <input type="email" v-model="form.email" placeholder="henrique.gomes2@escolar.ifrn.edu" class="rounded-sm px-4 py-3 w-full">
            </div>

            <div class="flex flex-col gap-3 w-full">
                <label class="font-bold">Telefone</label>
                <input type="text" v-model="form.telefone" placeholder="(84) 98877-6655" class="rounded-sm px-4 py-3 w-full">
            </div>

            <div class="flex flex-col gap-3 w-full">
                <label class="font-bold">Endereço</label>
                <input type="text" v-model="form.endereco" placeholder="Rua Tortinhas, 650" class="rounded-sm px-4 py-3 w-full">
            </div>

            <p v-if="error" class="text-red-500 font-semibold">{{ error }}</p>
            <BaseButton type="submit" :disabled="loading" color="blue">{{ loading ? 'Salvando' : 'Salvar alterações' }}</BaseButton>
        </form>
    
    </main>

    <TheFooter class="mb-15" />
</template>