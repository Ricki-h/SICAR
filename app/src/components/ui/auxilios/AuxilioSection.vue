<script setup>
import { computed } from 'vue'
import Pagination from '../Pagination.vue'
import AuxilioCard from './AuxilioCard.vue'

const props = defineProps({
  auxilios: {
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
  return props.auxilios.slice(start, start + props.perPage)
})
</script>


<template>
  <div class="flex flex-col gap-5">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:justify-between justify-center">
      <AuxilioCard
        v-for="auxilio in paginated"
        :key="auxilio.id"
        :auxilio="auxilio"
      />
    </div>

    <Pagination
      v-if="auxilios.length > perPage"
      :items="auxilios"
      :currentPage="page"
      :perPage="perPage"
      @page-change="emit('page-change', $event)" class="flex w-full items-center justify-center"
    />
  </div>
</template>
