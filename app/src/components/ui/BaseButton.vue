<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: { type: [String, Object], default: null },
  type: { type: String, default: 'button' },
  color: { type: String, default: 'neutral' },
  style: { type: String, default: 'rounded' },
  variant: { type: String, default: 'solid' },
  size: { type: String, default: 'md' }
})

const classes = computed(() => [
  'ui-base',
  `ui-${props.variant}-${props.color}`,
  `ui-${props.style}`,
  `ui-${props.size}`,
  'text-sm font-bold font-title hover:cursor-pointer'
])
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="classes"
  >
    <slot />
  </RouterLink>

  <button
    v-else
    :type="type"
    :class="classes"
  >
    <slot />
  </button>
</template>