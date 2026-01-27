<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    to: {
        type: [String, Object],
        defautl: null
    }
})
</script>

<template> 
    <RouterLink v-if="props.to" :to="props.to" class="w-full sm:w-auto h-70 gap-4 flex flex-col items-center justify-center text-heading font-text font-semibold text-xl hover:cursor-pointer bg-bg-blue hover:bg-bg-blue-hover hover:shadow-md min-w-70">
        <slot name="imagem" />
        <slot name="title" />
    </RouterLink>
    <div v-else class="min-w-70 w-full sm:w-auto h-70 flex flex-col gap-4 items-center justify-center text-heading font-text font-semibold text-xl hover:cursor-pointer bg-bg-blue hover:bg-bg-blue-hover hover:shadow-md">
        <slot name="imagem" />
        <slot name="title" />
    </div>
</template>