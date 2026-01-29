<script setup>
import FooterDesktop from './footer/FooterDesktop.vue';
import FooterMobile from './footer/FooterMobile.vue';
import FooterTablet from './footer/FooterTablet.vue';
</script>

<template>
    <FooterDesktop class="hidden xl:flex" />
    <FooterTablet class="hidden md:flex xl:hidden" />
    <FooterMobile class="flex md:hidden xl:hidden" />
</template>