<script setup>
import { computed } from 'vue'

const colorClasses = {
    blue: 'bg-blue-50 hover:bg-blue-100',
    red: 'bg-red-50 hover:bg-red-100',
    green: 'bg-green-50 hover:bg-green-100'
}

const sizeClasses = {
    tam_70: 'w-[280px] h-[280px]',
    sm: 'w-48 h-48',
    md: 'w-64 h-64',
    lg: 'w-72 h-72'
}

const props = defineProps({
    color: {type: String, default: 'blue'},
    size: {type: String, default: 'tam_70'}
});

const classes = computed(() => [
    'flex flex-col justify-center items-center gap-2 rounded-sm shadow-md',
    colorClasses[props.color] ?? colorClasses.blue,
    sizeClasses[props.size] ?? sizeClasses.tam_70,
    'delay-150 duration-300 ease-in-out'
]);

</script>

<template>    
    <div :class="classes">
        <slot name="imagem" />
        <slot name="title" />
    </div>
</template>