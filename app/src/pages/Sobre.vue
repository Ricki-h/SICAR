<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '../services/api';

const cats = ref([])
onMounted(async() => {
    const { data } = await api.get('/empregocategoria/all')
    cats.value = data
})
</script>

<template>

  <div v-if="cats.length > 0"
  v-for="cat in cats" :key="cat.ID" class="bg-button flex items-center gap-2 p-2">
    <div v-html="cat.Icone"></div>
    <p class="text-btn-text">{{ cat.Nome }}</p>
  </div>

</template>
