<script setup>
import { computed } from 'vue'
import Pagination from '../Pagination.vue'
import OngCard from './OngCard.vue'

const props = defineProps({
  
  ong: {
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
  
  return props.ong.slice(start, start + props.perPage)  
})
</script>

<template>
  <div class="flex flex-col gap-5">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <OngCard
        v-for="ong in paginated"
        :key="ong.id"
        :ong="ong" 
      />
    </div>

    <Pagination
      v-if="ong.length > perPage"
      :items="ong"
      :currentPage="page"
      :perPage="perPage"
      @page-change="emit('page-change', $event)" class="flex w-full items-center justify-center"
    />
    
  </div>
</template>