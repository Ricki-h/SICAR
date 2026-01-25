<script setup>
import { computed } from 'vue'

const colorClasses = {
    blue: 'bg-blue-50 hover:bg-blue-100',
    red: 'bg-red-50 hover:bg-red-100',
    green: 'bg-green-50 hover:bg-green-100'
}

const sizeClasses = {
    tam_70: 'w-full max-w-[280px] aspect-square',
    tam_tablet: 'w-full max-w-[321px] h-[280px]',
    tam_cell: 'w-full max-w-[325px] h-[280px]',
    sm: 'w-48 h-48',
    md: 'w-64 h-64',
    lg: 'w-72 h-72'
}

const props = defineProps({
    color: {type: String, default: 'blue'},
    size: {type: String, default: 'tam_70'}
});

const classes = computed(() => [
    'flex flex-col justify-center items-center gap-2 rounded-sm shadow-md mx-auto p-4',
    colorClasses[props.color] ?? colorClasses.blue,
    sizeClasses[props.size] ?? sizeClasses.tam_70,
    'delay-150 duration-300 ease-in-out md:tam_70 sm:tam_tablet tam_cell'
]);

</script>

<template>    
    <div :class="classes">
        <slot name="imagem" />
        <slot name="title" />
    </div>
</template>