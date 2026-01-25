<script setup>
import { defineProps, defineEmits, computed } from 'vue';
const colorClasses = {
    gray: "#6B818F"
}
const sizeClasses = {
    // tam_70: 'w-full max-w-[280px] aspect-square',
    tam_70: 'w-full max-w-[280px] aspect-square',
    tam_tablet: 'w-full max-w-[321px] h-[280px]',
    tam_cell: 'w-full max-w-[325px] h-[280px]',
    sm: 'w-48 h-48',
    md: 'w-64 h-64',
    lg: 'w-72 h-72'
}
const classes = computed(() => [
    'flex flex-col justify-center items-center gap-5 rounded-sm shadow-md mx-auto p-4',
    colorClasses[props.color] ?? colorClasses.gray,
    sizeClasses[props.size] ?? sizeClasses.tam_70,
    'delay-150 duration-300 ease-in-out'
]);
defineProps({
  category: { type: String, default: 'Categoria' },
  
  title: { type: String, default: 'TÍTULO DO SERVIÇO' },
  description: { type: String, default: 'Lorem impsum Lorem impsum dolor Lorem impsum Lorem impsum sit.' },
  buttonText: { type: String, default: 'Acessar Serviço' }
});
</script>
<template>
    <div class="bg-white border border-gray-100 rounded-lg p-6 shadow-sm w-[280px] max-lg:w-[323px] flex flex-col">
        <div class="flex gap-4 items-center mb-6 h-[32px] ">
            <div class="icon-wrapper">
                <slot name="icon">
                <!-- Ícone Padrão (aparece se você não passar nada) -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                </slot>
            </div>
            <span class="font-semibold text-xl ">
                {{ category }}
            </span>

        </div>
        <hr class="border-gray-200 mb-5">
        <div class="flex flex-col gap-2 mb-5 ">
            <h3>
                {{ title }}
            </h3>
            <p class="text-[gray] ">
                {{ description }}
            </p>
        </div>
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 transition-colors">
            <a href="#" class="font-bold">
                {{ buttonText }}
            </a>
        </button>

    </div>
</template>