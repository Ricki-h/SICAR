<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  currentPage: {
    type: Number,
    default: 1
  },
  perPage: {
    type: Number,
    default: 6
  }
})

const emit = defineEmits(['page-change'])

const totalPages = computed(() =>
  Math.ceil(props.items.length / props.perPage)
)

const pagesToShow = 5

const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return
  emit('page-change', page)
}

const getPages = computed(() => {
  const pages = []
  const half = Math.floor(pagesToShow / 2)

  let start = Math.max(1, props.currentPage - half)
  let end = Math.min(totalPages.value, start + pagesToShow - 1)

  if (end - start + 1 < pagesToShow) {
    start = Math.max(1, end - pagesToShow + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})
</script>

<template>
    <div v-if="totalPages >  1" class="flex items-center gap-1">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage == 1"
        class="bg-button text-btn-text fill-btn-text font-text p-2 text-sm flex items-center justify-center rounded-sm disabled:opacity-60 disabled:cursor-not-allowed transition duration-300 hover:bg-btn-hover" :class="[currentPage === 1 ? 'fill-text' : 'fill-btn-text']">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="currentColor">
            <path d="M2.37502 5.575L6.27501 9.475C6.45835 9.65833 6.55002 9.89167 6.55002 10.175C6.55002 10.4583 6.45835 10.6917 6.27501 10.875C6.09168 11.0583 5.85835 11.15 5.57502 11.15C5.29168 11.15 5.05835 11.0583 4.87502 10.875L0.275015 6.275C0.175015 6.175 0.104348 6.06667 0.0630151 5.95C0.0216818 5.83333 0.000682051 5.70833 1.53848e-05 5.575C-0.000651282 5.44167 0.0203484 5.31667 0.0630151 5.2C0.105682 5.08333 0.176348 4.975 0.275015 4.875L4.87502 0.275C5.05835 0.0916663 5.29168 0 5.57502 0C5.85835 0 6.09168 0.0916663 6.27501 0.275C6.45835 0.458333 6.55002 0.691667 6.55002 0.975C6.55002 1.25833 6.45835 1.49167 6.27501 1.675L2.37502 5.575Z"/>
            </svg>
        </button>
        
        <button v-for="page in getPages" :key="page" @click="goToPage(page)"
        class="bg-button text-btn-text fill-btn-text font-text font-medium flex-none p-2 text-sm flex items-center justify-center rounded-sm disabled:opacity-60 disabled:cursor-not-allowed transition duration-300 hover:bg-btn-hover" :class="[currentPage === page ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-btn text-btn-text']">
        {{ page }}
        </button>

        <button @click="goToPage(currentPage + 1)" :disabled="currentPage == totalPages"
        class="bg-button text-btn-text fill-btn-text font-text p-2 text-sm flex items-center justify-center rounded-sm disabled:opacity-60 disabled:cursor-not-allowed transition duration-300 hover:bg-btn-hover" :class="[currentPage === totalPages ? 'fill-text' : 'fill-btn-text']">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="currentColor">
            <path d="M4.17577 5.575L0.275766 9.475C0.092433 9.65833 0.0007658 9.89167 0.0007658 10.175C0.0007658 10.4583 0.092433 10.6917 0.275766 10.875C0.4591 11.0583 0.692433 11.15 0.975766 11.15C1.2591 11.15 1.49243 11.0583 1.67577 10.875L6.27577 6.275C6.37577 6.175 6.44643 6.06667 6.48777 5.95C6.5291 5.83333 6.5501 5.70833 6.55077 5.575C6.55143 5.44167 6.53043 5.31667 6.48777 5.2C6.4451 5.08333 6.37443 4.975 6.27577 4.875L1.67577 0.275C1.49243 0.0916663 1.2591 0 0.975766 0C0.692433 0 0.4591 0.0916663 0.275766 0.275C0.092433 0.458333 0.0007658 0.691667 0.0007658 0.975C0.0007658 1.25833 0.092433 1.49167 0.275766 1.675L4.17577 5.575Z"/>
            </svg>
        </button>
</div>
</template>