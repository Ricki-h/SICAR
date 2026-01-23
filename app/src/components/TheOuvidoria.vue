<script setup>
import { ref } from 'vue'

</script>

<template>
  <!-- OUVIDORIA -->
   <div class="flex flex-col gap-12 w-304 m-auto">
        <div class="flex flex-col items-center gap-3">
            <h1 class="text-4xl">OUVIDORIA</h1>
            <p>Aqui te ouvimos independentemente do que tem a dizer</p>
        </div>

        <div class="flex flex-row items-center justify-evenly">
            
            <div class="flex flex-col justify-center items-center gap-2 rounded-sm shadow-md bg-blue-50 w-70 h-70">
                <img src="../assets/mega-phone.svg"></img>
                <h1>DENÚNCIA</h1>
            </div>
            <div class="flex flex-col justify-center items-center gap-2 rounded-sm shadow-md bg-blue-50 w-70 h-70">
                <img src="../assets/comment.svg"></img>
                <h1>SOLICITAÇÃO</h1>
            </div>
            <div class="flex flex-col justify-center items-center gap-2 rounded-sm shadow-md bg-blue-50 w-70 h-70">
                <img src="../assets/Like.svg"></img>
                <h1>ELOGIO</h1>
            </div>
            <div class="flex flex-col justify-center items-center gap-2 rounded-sm shadow-md bg-blue-50 w-70 h-70">
                <img src="../assets/Dislike.svg"></img>
                <h1>RECLAMAÇÕES</h1>
            </div>

        </div>
    </div>

</template>

<style scoped>

</style>
