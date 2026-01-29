<script setup>
import BaseButton from '../BaseButton.vue';


const props = defineProps({
  curso: {
    type: Object,
    required: true
  }
})

const { area, titulo, descricao, id, icon } = props.curso
</script>
<template>
    <div class="bg-bg-blue rounded-2xl flex flex-col font-text gap-6 p-6 w-ful md:max-w-96">
      <div class="flex justify-between items-center gap-2">
        <div class="flex flex-col gap-6 w-full">
          <div class="flex flex-col gap-2">
            <span class="px-3 py-1 font-medium text-button border border-button w-fit rounded-full text-xs">{{ area }}</span>
            <h4 class="font-bold text-xl text-title">{{ titulo }}</h4>
          </div>
          <p class="text-sm  text-text">{{ descricao.length > 70 ? descricao.slice(0, 70) + '...' : descricao }}</p>
        </div>
        <div class="max-w-25 max-h-25 w-full overflow-hidden bg-orange-600 rounded-xl">
          <img :src="icon" alt="icon do curso" class="object-cover w-full">
        </div>
      </div>
      <BaseButton color="blue" style="squared" class="w-full rounded-lg" :to="`/cursos/${id}`">Acessar curso</BaseButton>
    </div>
  </template>
  