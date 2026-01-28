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

onMounted(async () => {
  await auth.fetchUser()

  form.value = {
    nome: auth.user.nome,
    email: auth.user.email,
    telefone: auth.user.telefone,
    endereco: auth.user.endereco
  }
})
const onlyNumbers = (v) => v.replace(/\D/g, '')

const formatCPF = (v) => {
  const numbers = onlyNumbers(v).slice(0, 11)

  return numbers
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

const salvar = async () => {
  loading.value = true
  try {
    await api.put('usuarios/update', form.value)
    await auth.fetchUser()
    alert('Dados atualizados com sucesso!')
  } catch (e) {
    alert('Erro ao atualizar dados')
  } finally {
    loading.value = false
  }
}

const uploadFoto = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  preview.value = URL.createObjectURL(file)

  const formData = new FormData()
  formData.append('icon', file)

  try {
    await api.put('usuarios/update/icon', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    await auth.fetchUser()
  } catch {
    alert('Erro ao atualizar foto')
  }
}
</script>

<template>
    <TheHeader class="mb-15"/>
    <main class="ui-container-xl px-6 sm:px-12 lg:px-28 mx-auto flex flex-col gap-15 mb-25">
        <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4 font-title">
                <BaseLink to="/perfil">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 14 24" fill="currentColor" class="fill-title hover:fill-blue-600 w-3 md:w-auto">
                        <path d="M5.07636 11.916L13.4122 20.2519C13.8041 20.6437 14 21.1424 14 21.748C14 22.3536 13.8041 22.8524 13.4122 23.2442C13.0204 23.6361 12.5216 23.832 11.916 23.832C11.3104 23.832 10.8117 23.6361 10.4199 23.2442L0.587817 13.4122C0.374077 13.1984 0.223034 12.9669 0.134688 12.7175C0.0463426 12.4682 0.00145782 12.201 3.28835e-05 11.916C-0.00139205 11.631 0.0434928 11.3638 0.134688 11.1145C0.225884 10.8651 0.376927 10.6336 0.587817 10.4198L10.4199 0.587784C10.8117 0.195927 11.3104 0 11.916 0C12.5216 0 13.0204 0.195927 13.4122 0.587784C13.8041 0.979641 14 1.47837 14 2.08396C14 2.68956 13.8041 3.18829 13.4122 3.58014L5.07636 11.916Z" />
                    </svg>
                </BaseLink>
                <h1 class=" text-3xl md:text-5xl font-bold text-blue-600">Dados Pessoais</h1>
            </div>
            <hr class="w-full border-clarinho">
        </div>
      <div v-if="auth.user" class=" flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10">
    
        <div  class="space-y-6 font-text w-full">
    
          <div class="flex flex-col gap-2">
            <label class="font-bold">{{ auth.user.UsuárioComum ? 'CPF' : 'CadARCA' }}</label>
            <input
              :value="formatCPF(auth.user.UsuárioComum ? auth.user.UsuárioComum.cpf : auth.user.UsuárioCadarca)"
              disabled
              class="border-clarinho bg-bg-blue text-clarinho px-4 py-3 rounded-md text-sm cursor-not-allowed"
            />
          </div>
    
          <div class="flex flex-col gap-2">
            <label class="font-bold">Nome</label>
            <input v-model="form.nome" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Edite seu nome"/>
          </div>
    
          <div class="flex flex-col gap-2">
            <label class="font-bold">E-mail</label>
            <input v-model="form.email" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Edite seu E-mail"/>
          </div>
    
          <div class="flex flex-col gap-2">
            <label class="font-bold">Telefone</label>
            <input v-model="form.telefone" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Edite seu Telefone"/>
          </div>
    
          <div class="flex flex-col gap-2">
            <label class="font-bold">Endereço</label>
            <input v-model="form.endereco" class="border-clarinho bg-bg text-text placeholder:text-clarinho focus:outline-orange-600 px-4 py-3 rounded-md text-sm" placeholder="Edite seu Endereço"/>
          </div>
          
          <BaseButton type="button" color="blue" @click="salvar" class="w-full">Alterar dados do perfil</BaseButton>
        </div>
    
        
        <div class="flex flex-col items-center gap-4">
          <div class=" rounded-full overflow-hidden border-6 border-blue-600 p-1">
            <img
              :src="preview || auth.user?.icon"
              class="w-60 h-60 object-cover"
            />
          </div>
    
          <label class="bg-orange-600 px-4 py-2 rounded-full text-white cursor-pointer flex flex-row-reverse items-center gap-2">
              Alterar foto de perfil
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M1.55556 14C1.12778 14 0.761704 13.8478 0.457333 13.5434C0.152963 13.2391 0.000518518 12.8727 0 12.4444V1.55556C0 1.12778 0.152444 0.761704 0.457333 0.457333C0.762222 0.152963 1.1283 0.000518518 1.55556 0H12.4444C12.8722 0 13.2386 0.152444 13.5434 0.457333C13.8483 0.762222 14.0005 1.1283 14 1.55556V12.4444C14 12.8722 13.8478 13.2386 13.5434 13.5434C13.2391 13.8483 12.8727 14.0005 12.4444 14H1.55556ZM3.11111 10.8889H10.8889C11.0444 10.8889 11.1611 10.8176 11.2389 10.675C11.3167 10.5324 11.3037 10.3963 11.2 10.2667L9.06111 7.40833C8.98333 7.30463 8.87963 7.25278 8.75 7.25278C8.62037 7.25278 8.51667 7.30463 8.43889 7.40833L6.41667 10.1111L4.97778 8.18611C4.9 8.08241 4.7963 8.03055 4.66667 8.03055C4.53704 8.03055 4.43333 8.08241 4.35556 8.18611L2.8 10.2667C2.6963 10.3963 2.68333 10.5324 2.76111 10.675C2.83889 10.8176 2.95556 10.8889 3.11111 10.8889Z"/>
              </svg>
            <input type="file" hidden accept="image/*" @change="uploadFoto" />
          </label>
        </div>
    
      </div>
      <Loading v-else/>

    </main>
    <TheFooter/>
</template>