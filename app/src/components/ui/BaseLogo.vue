<script setup>
import BaseLink from './BaseLink.vue'
import logo from '../../assets/icons/Logo.svg?raw'

defineProps({
  size: {
    type: String,
    default: 'md'
  }
})

const sizeClasses = {
  md: 'w-26 h-6.5 [&>svg]:w-full [&>svg]:h-full',
  sm: 'w-21.5 h-5 [&>svg]:w-full [&>svg]:h-full'
}
</script>

<template>
  <BaseLink
    to="/"
    class="inline-flex items-center leading-none"
  >
    <span
      class="block"
      :class="sizeClasses[size]"
      v-html="logo"
    />
  </BaseLink>
</template>
