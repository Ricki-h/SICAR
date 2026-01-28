<script setup>
import BaseButton from '../BaseButton.vue';
const props = defineProps({
    auxilio: {
        type: Object,
        required: true
    }
})

const { id, valor, titulo, tipo, descricao } = props.auxilio

const valorFormatado = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(valor)
</script>

<template>
    <div class="font-text flex flex-col gap-3 p-7 bg-bg-blue rounded-xl justify-between">
        <div class="flex items-center gap-2">
            <span class="px-2 py-1 bg-button text-btn-text text-xs rounded-full">{{ valorFormatado }}</span> 
            <span class="px-2 py-1 border border-button text-button text-xs rounded-full">{{ tipo }}</span> 
        </div>
        <div class="flex flex-col gap-2">
            <h6 class="font-bold text-xl text-title">{{ titulo }}</h6>
            <p class="text-sm text-text">{{ descricao.length > 136 ? descricao.slice(0, 135) + '...' : descricao }}</p>
        </div>
        <BaseButton :to="`/auxilios/${id}`">Acessar Auxílio</BaseButton>
    </div>
</template>