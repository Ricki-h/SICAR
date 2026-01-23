<script setup>
import { ref } from 'vue'

</script>

<template>
   <div class="flex flex-col gap-12 w-304 m-auto">
        <div class="flex flex-col items-center gap-3">
            <h1 class="text-[40px] text-orange-600 font-bold font-sans">OUVIDORIA</h1>
            <p class="font-sans text-base">Aqui te ouvimos independentemente do que tem a dizer.</p>
        </div>

        <div class="flex flex-row items-center justify-evenly">
            
            <div class="flex flex-col justify-center items-center gap-2 rounded-sm shadow-md bg-blue-50 hover:bg-blue-100 delay-50 duration-300 ease-in-out w-70 h-70">
                <img src="../assets/mega-phone.svg"></img>
                <h2 class="text-2xl font-semibold text-blue-950">DENÚNCIA</h2>
            </div>
            <div class="flex flex-col justify-center items-center gap-2 rounded-sm shadow-md bg-blue-50 hover:bg-blue-100 delay-50 duration-300 ease-in-out w-70 h-70">
                <img src="../assets/comment.svg"></img>
                <h2 class="text-2xl font-semibold text-blue-950">SOLICITAÇÃO</h2>
            </div>
            <div class="flex flex-col justify-center items-center gap-2 rounded-sm shadow-md bg-blue-50 hover:bg-blue-100 delay-50 duration-300 ease-in-out w-70 h-70">
                <img src="../assets/Like.svg"></img>
                <h2 class="text-2xl font-semibold text-blue-950">ELOGIO</h2>
            </div>
            <div class="flex flex-col justify-center items-center gap-2 rounded-sm shadow-md bg-blue-50 hover:bg-blue-100 delay-50 duration-300 ease-in-out w-70 h-70">
                <img src="../assets/Dislike.svg"></img>
                <h2 class="text-2xl font-semibold text-blue-950">RECLAMAÇÕES</h2>
            </div>

        </div>
    </div>

</template>

<style scoped>

</style>
