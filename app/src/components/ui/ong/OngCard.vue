<script setup>
import BaseButton from '../BaseButton.vue';

const props = defineProps({
    ong: {
        type: Object,
        required: true
    }
})


</script>

<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-100">
      <div class="h-48 bg-gray-300 w-full"></div>
      
      <div class="p-5 flex flex-col gap-4">
        <h3 class="text-xl font-bold text-gray-800">
          {{ ong.titulo }}
        </h3>
  
        <div class="w-full bg-blue-100 h-3 rounded-full overflow-hidden">
          <div 
            class="bg-orange-500 h-full" 
            :style="{ width: (ong.arrecadado / ong.meta * 100) + '%' }"
          ></div>
        </div>
  
        <div class="flex justify-between items-end">
          <div>
            <p class="text-gray-500 text-sm font-semibold">Meta (R$)</p>
            <p class="text-3xl font-bold text-orange-500">{{ ong.meta }}</p>
          </div>
          <div class="text-right">
            <p class="text-gray-500 text-sm font-semibold">Arrecadado (R$)</p>
            <p class="text-3xl font-bold text-orange-500">{{ ong.arrecadado }}</p>
          </div>
        </div>
  
        <BaseButton class="w-full" color="neutral"> Ajudar ONG </BaseButton>
      </div>
    </div>
</template>