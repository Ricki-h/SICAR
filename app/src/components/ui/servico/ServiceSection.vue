<script setup>
import { computed } from 'vue'
import Pagination from '../Pagination.vue'
import ServiceCard from './ServiceCard.vue'

const props = defineProps({
  services: {
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
    <div class="flex flex-wrap gap-2 sm:justify-between justify-center">
      <ServiceCard
        v-for="service in paginated"
        :key="service.id"
        :service="service"
      />
    </div>

    <Pagination
      v-if="services.length > perPage"
      :items="services"
      :currentPage="page"
      :perPage="perPage"
      @page-change="emit('page-change', $event)"
    />
  </div>
</template>
