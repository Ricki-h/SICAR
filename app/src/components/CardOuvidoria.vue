<script setup>
import { computed } from 'vue'

const props = defineProps({
    color: {type: String, default: 'blue'},
    size: {type: String, default: '70'}
});

const classes = computed(() => [
    'flex flex-col justify-center items-center gap-2 rounded-sm shadow-md',
    `bg-${props.color}-50 hover:bg-${props.color}-100`,
    `w-${props.size} h-${props.size}`,
    'delay-150 duration-300 ease-in-out'
]);

</script>

<template>    
        <div :class="classes">
            <slot name="imagem" />
            <slot name="title" />
        </div>
</template>

<style scoped>

</style>
