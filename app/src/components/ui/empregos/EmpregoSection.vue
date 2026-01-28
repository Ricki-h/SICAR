<script setup>
import { computed } from 'vue'
import Pagination from '../Pagination.vue'
import EmpregoCard from './EmpregoCard.vue'

const props = defineProps({
  empregos: {
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
  return props.services.slice(start, start + props.perPage)
})
</script>

<template>
    <div class="flex flex-col gap-5">
        <div class="flex flex-wrap gap-2 sm:justify-evenly justify-center">
            <EmpregoCard v-for="emprego in props.empregos" :key="emprego.id" :oportunidade="emprego"></EmpregoCard>
        </div>
    </div>

    <Pagination
      v-if="empregos.length > perPage"
      :items="empregos"
      :currentPage="page"
      :perPage="perPage"
      @page-change="emit('page-change', $event)" class="flex w-full items-center justify-center"
    />
</template>