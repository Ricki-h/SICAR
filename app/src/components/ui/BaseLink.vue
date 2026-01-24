<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  color: { type: String, default: 'title' },
  size: { type: String, default: 'sm' }
})

const isRouter = computed(() => !!props.to)

const classes = computed(() => [
  `ui-link`,
  `ui-link-${props.color}`,
  `text-${props.size}`
])
</script>

<template>
  <RouterLink
    v-if="isRouter"
    :to="to"
    :class="classes"
  >
    <slot />
  </RouterLink>

  <a
    v-else
    :href="href"
    :class="classes"
  >
    <slot />
  </a>
</template>
