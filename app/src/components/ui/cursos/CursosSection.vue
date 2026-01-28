<script setup>
import { computed } from 'vue'
import Pagination from '../Pagination.vue'

import CursosCard from './CursosCard.vue'

const props = defineProps({
  
  curso: {
    type: Array,
    default: () => []
  },
  page: {
    type: Number,
    default: 1
  },
  perPage: {
    type: Number,
    default: 6
  }
})

const emit = defineEmits(['page-change'])

const paginated = computed(() => {
  const start = (props.page - 1) * props.perPage
  
  return props.curso.slice(start, start + props.perPage)
})
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="bg-yellow-100 p-2 text-xs">
      <p>Total no array 'curso': {{ curso.length }}</p>
      <p>Página atual: {{ page }}</p>
      <p>Itens na página atual: {{ paginated.length }}</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <CursosCard
        v-for="item in paginated"
        :key="item.id"
        :curso="item" 
      />
    </div>

    <div class="flex justify-center">
      <Pagination
      v-if="curso.length > perPage"
      :items="curso"
      :currentPage="page"
      :perPage="perPage"
      @page-change="emit('page-change', $event)"
    />
    </div>
    
  </div>
</template>