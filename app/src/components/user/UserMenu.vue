<script setup>
    import BaseLink from '../ui/BaseLink.vue';
    import { useAuthStore } from '../../stores/auth';
    import { computed, onMounted } from 'vue';
    const auth = useAuthStore();
    const nomeCurto = computed(() => {
    if (!auth.user?.nome) return 'Carregando...'
    return auth.user.nome.trim().split(/\s+/)[0]
  })

  const nomeCompleto = computed(() => auth.user?.nome || 'Carregando...')

  const icon = computed(() => auth.user?.icon)

  onMounted(async () => {
    if (auth.isAuthenticated) {
      await auth.fetchUser()
    }
  })
</script>

<template>
    <div class="dropdown dropdown-end group/drop">
        <div
        tabindex="0"
        role="button"
        class="
            flex items-center gap-3 px-2 py-2 rounded-full
            cursor-pointer select-none
            transition-colors
            hover:bg-bg-blue
            group-focus-within/drop:bg-bg-blue
        ">
        <div class="w-9 h-9 rounded-full bg-clarinho flex items-center justify-center overflow-hidden">
            <img :src="icon" alt="">
        </div>
    
        <span class="text-title text-sm">
            Olá, <strong class="text-orange-600 font-bold">{{ nomeCurto }}</strong>
        </span>
        <svg
        class="w-3 h-3 fill-heading transition-transform duration-300 group-focus-within/drop:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 8 4"
      >
        <path stroke-linecap="round"  stroke-linejoin="round" stroke-width="2" d="M3.59647 3.92334L7.19294 -8.05855e-05H0L3.59647 3.92334Z" />
      </svg>
        </div>

        <div
      tabindex="0"
      class="
        dropdown-content mt-3 w-72
        bg-bg rounded-xl shadow-lg shadow-shadow
        p-5
      "
    >
      <div class="flex flex-col items-center gap-3 mb-4">
        <img :src="icon" alt="" class="w-25">

        <p class="text-center text-2xl text-text">
          Olá, <strong class="text-title">{{ nomeCompleto }}</strong>
        </p>

        <BaseLink class="flex items-center gap-1 group/link">Acessar Arca do Usuário
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 22 22" fill="none" stroke="CurrentColor" class="stroke-title group-hover/link:stroke-orange-600">
            <path d="M9.25014 3.62916H1.22046V20.4915H18.0828V13.2648M6.03827 14.8707L20.4917 1.22021M20.4917 1.22021H14.068M20.4917 1.22021V7.64395" stroke-width="2.44068" stroke-linecap="round"/>
          </svg>
        </BaseLink>
      </div>

      <hr class="my-3 border-clarinho" />

      <ul class=" text-sm">
        <li class="hover:bg-bg-blue p-2"><BaseLink color="text" class="flex items-center gap-2" to="/conta/dados-pessoais">Dados pessoais</BaseLink></li>
        <li class="hover:bg-bg-blue p-2"><BaseLink color="text" class="flex items-center gap-2">Segurança da conta</BaseLink></li>
        <li class="hover:bg-bg-blue p-2"><BaseLink color="text" class="flex items-center gap-2">Suporte</BaseLink></li>
        <li class="hover:bg-bg-blue p-2 hover:cursor-pointer"><button @click="auth.logout()" class="flex items-center gap-2 font-text text-red-500 font-medium hover:cursor-pointer">Sair</button></li>
      </ul>
    </div>
    </div>
    
</template>