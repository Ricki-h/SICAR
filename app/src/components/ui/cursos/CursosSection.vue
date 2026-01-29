<script setup>
import { computed } from 'vue'
import Pagination from '../Pagination.vue'

import CursosCard from './CursosCard.vue'

const props = defineProps({
  
  cursos: {
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
  
  return props.cursos.slice(start, start + props.perPage)
})
</script>

<template>
  <div class="flex flex-col gap-10">
    
    <div class="flex justify-evenly gap-2 flex-wrap">
      <CursosCard
        v-for="curso in paginated"
        :key="curso.id"
        :curso="curso" 
      />
    </div>

    <div class="flex justify-center">
      <Pagination
      v-if="cursos.length > perPage"
      :items="cursos"
      :currentPage="page"
      :perPage="perPage"
      @page-change="emit('page-change', $event)"
    />
    </div>
    
  </div>
</template>