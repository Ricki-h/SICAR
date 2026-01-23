<script setup>
    import { computed } from 'vue';
    const props = defineProps({
        color: { type: String, default: 'neutral' },
        style: { type: String, default: 'rounded'},
        variant: { type: String, default: 'solid'},
        size: { type: String, default: 'md' }
    });

    const classes = computed(() => [
        `ui-base`,
        `ui-${props.variant}-${props.color}`,
        `ui-${props.style}`,
        `ui-${props.size}`,
        'text-sm font-bold hover:cursor-pointer',
    ])
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<style scoped>
</style>