<script setup>
import { useAuthStore } from '../../../stores/auth'
import { ref } from 'vue'

import BaseLogo from '../BaseLogo.vue'
import BaseLink from '../BaseLink.vue'
import BaseButton from '../BaseButton.vue'
import ThemeToggle from '../ThemeToggle.vue'
import UserMenu from '../../user/UserMenu.vue'

const auth = useAuthStore()
const open = ref(false)
</script>

<template>
    <div class="flex items-center justify-between sm:px-12 px-6 py-6">
        <BaseLogo/>

        <div class="flex gap-2 items-center">
            <template v-if="!auth.isAuthenticated">
                <BaseButton color="orange" to="/login/comum">
                Entrar
                </BaseButton>
            </template>
            <UserMenu v-else />

            <button @click="open = !open" class="hover:cursor-pointer">
                <svg
                    viewBox="0 0 27 16"
                    width="27"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-heading"
                    >
                        <path d="M1.35 2.66667H25.65C26.008 2.66667 26.3514 2.52619 26.6046 2.27614C26.8578 2.02609 27 1.68696 27 1.33333C27 0.979711 26.8578 0.640573 26.6046 0.390525C26.3514 0.140476 26.008 0 25.65 0H1.35C0.991958 0 0.64858 0.140476 0.395406 0.390525C0.142232 0.640573 0 0.979711 0 1.33333C0 1.68696 0.142232 2.02609 0.395406 2.27614C0.64858 2.52619 0.991958 2.66667 1.35 2.66667ZM25.65 13.3333H1.35C0.991958 13.3333 0.64858 13.4738 0.395406 13.7239C0.142232 13.9739 0 14.313 0 14.6667C0 15.0203 0.142232 15.3594 0.395406 15.6095C0.64858 15.8595 0.991958 16 1.35 16H25.65C26.008 16 26.3514 15.8595 26.6046 15.6095C26.8578 15.3594 27 15.0203 27 14.6667C27 14.313 26.8578 13.9739 26.6046 13.7239C26.3514 13.4738 26.008 13.3333 25.65 13.3333ZM25.65 6.66667H1.35C0.991958 6.66667 0.64858 6.80714 0.395406 7.05719C0.142232 7.30724 0 7.64638 0 8C0 8.35362 0.142232 8.69276 0.395406 8.94281C0.64858 9.19286 0.991958 9.33333 1.35 9.33333H25.65C26.008 9.33333 26.3514 9.19286 26.6046 8.94281C26.8578 8.69276 27 8.35362 27 8C27 7.64638 26.8578 7.30724 26.6046 7.05719C26.3514 6.80714 26.008 6.66667 25.65 6.66667Z"/>
                    </svg>
            </button>

        </div>
        <div class="fixed inset-0 bg-black/30 z-50" v-if="open">
            <aside class="fixed top-0 right-0 w-64 h-full bg-bg z-50 px-2 py-6 flex flex-col">
                <button @click="open = false" class="p-4 hover:cursor-pointer group">
                    <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hover:fill-red-500 fill-heading"
                    >
                        <path d="M19.8661 1.82204C19.8638 2.17787 19.7204 2.52001 19.4672 2.77319L12.3301 10.4331L19.4785 17.5816C19.7317 17.8348 19.8752 18.1769 19.8774 18.5327C19.8796 18.8886 19.7404 19.2289 19.4903 19.479C19.2403 19.729 18.8999 19.8683 18.5441 19.8661C18.1882 19.8638 17.8461 19.7204 17.5929 19.4672L10.1831 12.0573L2.2845 19.9559C2.03133 20.2091 1.68919 20.3525 1.33336 20.3547C0.977527 20.3569 0.637147 20.2177 0.387098 19.9677C0.13705 19.7176 -0.0021842 19.3772 2.59151e-05 19.0214C0.00223603 18.6656 0.145709 18.3234 0.398883 18.0703L8.29744 10.1717L0.410238 2.2845C0.157064 2.03133 0.0135904 1.68919 0.0113804 1.33336C0.00917035 0.977527 0.148405 0.637147 0.398453 0.387098C0.648502 0.13705 0.988881 -0.00218422 1.34471 2.59154e-05C1.70055 0.00223605 2.04268 0.145709 2.29586 0.398884L10.1831 8.28609L17.5816 0.887567C17.8348 0.634393 18.1769 0.490919 18.5327 0.488709C18.8886 0.486499 19.2289 0.625733 19.479 0.875782C19.729 1.12583 19.8683 1.46621 19.8661 1.82204Z"/>
                    </svg>
                </button>
                <BaseLink class="p-4 hover:bg-bg-blue trasition duration-300">Ouvidoria</BaseLink>
                <BaseLink class="p-4 hover:bg-bg-blue trasition duration-300">Acessibilidade</BaseLink>
                <BaseLink class="p-4 hover:bg-bg-blue trasition duration-300">Blog</BaseLink>
                <BaseLink class="p-4 hover:bg-bg-blue trasition duration-300" to="/">Home</BaseLink>
                <details class="flex w-full flex-col">
                    <summary class="p-4 text-title font-text font-medium text-sm hover:cursor-pointer hover:bg-bg-blue trasition duration-300">Funcionalidades</summary>
                    <ul class="flex flex-col px-4 w-full">
                        <li class="w-full flex"><BaseLink  color="text px-2 py-1 hover:bg-bg-blue trasition duration-300 w-full" >Cursos</BaseLink></li>
                        <li class="w-full flex"><BaseLink  color="text px-2 py-1 hover:bg-bg-blue trasition duration-300 w-full" to="/services">Serviços</BaseLink></li>
                        <li class="w-full flex"><BaseLink  color="text px-2 py-1 hover:bg-bg-blue trasition duration-300 w-full" >Auxílios</BaseLink></li>
                        <li class="w-full flex"><BaseLink  color="text px-2 py-1 hover:bg-bg-blue trasition duration-300 w-full" >ONGs</BaseLink></li>
                        <li class="w-full flex"><BaseLink  color="text px-2 py-1 hover:bg-bg-blue trasition duration-300 w-full" to="/vagas">Oportunidades</BaseLink></li>
                        <li class="w-full flex"><BaseLink  color="text px-2 py-1 hover:bg-bg-blue trasition duration-300 w-full" >Fazer Denúncia</BaseLink></li>
                    </ul>
                </details>
                <ThemeToggle class="mt-4"/>
            </aside>
        </div>
    </div>
</template>