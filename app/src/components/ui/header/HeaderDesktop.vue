<script setup>
import { useAuthStore } from '../../../stores/auth'

import BaseLogo from '../BaseLogo.vue'
import BaseLink from '../BaseLink.vue'
import BaseDropDown from '../BaseDropDown.vue'
import BaseButton from '../BaseButton.vue'
import ThemeToggle from '../ThemeToggle.vue'
import UserMenu from '../../user/UserMenu.vue'

const auth = useAuthStore()
</script>

<template>
    <div class="ui-container-xl flex items-center justify-between py-6 px-28">
        <BaseLogo/>

        <nav class="flex items-center gap-3">
            <ThemeToggle />

            <BaseLink>Ouvidoria</BaseLink>
            <BaseLink>Acessibilidade</BaseLink>
            <BaseLink>Blog</BaseLink>
            <BaseLink to="/">Home</BaseLink>
            <BaseDropDown label="Funcionalidades">
                <li><BaseLink color="text">Cursos</BaseLink></li>
                <li><BaseLink color="text" to="/services">Serviços</BaseLink></li>
                <li><BaseLink color="text">Auxílios</BaseLink></li>
                <li><BaseLink color="text">ONGs</BaseLink></li>
                <li><BaseLink color="text">Empresas</BaseLink></li>
                <li><BaseLink color="text">Fazer Denúncia</BaseLink></li>
            </BaseDropDown>


            <div v-if="!auth.isAuthenticated" class="flex items-center gap-2">
                <BaseButton color="orange" to="/login/comum">Entrar</BaseButton>
                <BaseButton color="orange" variant="outline" to="/cadastro/comum">Cadastrar-se</BaseButton>
            </div>
            <UserMenu v-else />
        </nav>
    </div>
</template>