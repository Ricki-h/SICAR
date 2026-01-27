<script setup>
import BaseButton from '../BaseButton.vue';
const props = defineProps({
    service: {
        type: Object,
        required: true
    }
})


const { id, nome, desabrigado, descricaoCurta, CategoriaServico } = props.service
</script>

<template>
    <div class="bg-[#FAFAFA] shadow-md max-w-full sm:max-w-66 flex flex-col gap-5 lg:max-w-70 hover:shadow-lg hover:scale-102 p-6 transition-all w-full duration-500 hover:border border-orange-600 rounded-lg justify-between">
        <div class="flex gap-4">
            <img :src="CategoriaServico.icon" :alt="CategoriaServico.nome">
            <h3 class="text-xl text-[#142457] font-semibold font-title flex-none">{{ CategoriaServico.nome }}</h3>
        </div>

        <hr class="border-[#E5E5E5] w-full">

        <div class="flex flex-col gap-2">
            <h4 class="font-text text-[#142457]">{{ nome }}</h4>
            <p class="text-sm text-[#8E8E8E] font-text">{{ descricaoCurta }}</p>
        </div>

        <BaseButton class="w-full" color="blue" :to="`/servico/${id}`">Acessar Serviço</BaseButton>
    </div>
</template>