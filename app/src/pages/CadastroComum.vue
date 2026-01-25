<script setup>
    import BaseLink from '../components/ui/BaseLink.vue';
</script>

<template>
  <h1 class="text-title text-2xl font-title font-bold">
    Sobre
  </h1>
  <main class="p-10 bg-bg">
    <nav class="flex gap-6 p-6">
      <BaseLink to="/">Home</BaseLink>
      <BaseLink to="/sobre">Sobre</BaseLink>
    </nav>
  </main>
</template>
