<script setup>
import HeaderDesktop from './header/HeaderDesktop.vue'
import HeaderMobile from './header/HeaderMobile.vue'
</script>

<template>
    <header class="bg-bg border-b border-clarinho">
        <div class="block lg:hidden">
            <HeaderMobile/>
        </div>
        <div class="hidden lg:block">
            <HeaderDesktop/>
        </div>
    </header>
</template>