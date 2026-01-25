<script setup>
import BaseButton from './BaseButton.vue';
</script>

<template>
    <div class="relative w-full flex justify-center">
        <img src="/page-top.svg" alt="" class="w-full hidden sm:block">
        <img src="/page-top-mobile.svg" alt="" class="w-full blck sm:hidden">

        <div class="max-w-80 sm:max-w-140 lg:max-w-190 absolute top-[5vw] sm:top-[10vw] flex flex-col items-center gap-1 sm:gap-6">
            <h1 class="text-[#142457] text-2xl sm:text-4xl lg:text-5xl text-center font-title">BOAS VINDAS AO <span class="font-black"><strong class="text-orange-600">SICAR</strong>: SISTEMA INTEGRADO DA ARCA</span></h1>

            <h6 class="font-text text-[#142457] max-w-60 sm:max-w-full text-center text-xs sm:text-sm lg:text-base">O Sistema Integrado da ARCA está sempre disposto a atender suas necessidades.</h6>

            <div class="max-w-30 flex flex-col gap-3 sm:hidden">
                <BaseButton color="blue" size="sm" class="w-full">SOBRE NÓS</BaseButton>
                <BaseButton color="neutral" size="sm" class="w-full">CADASTRE-SE</BaseButton>
            </div>
            <div class="w-96 sm:flex gap-3 hidden">
                <BaseButton color="blue" class="w-full">SOBRE NÓS</BaseButton>
                <BaseButton color="neutral" class="w-full" to="/cadastro/comum">CADASTRE-SE</BaseButton>
            </div>
        </div>
    </div>
</template>