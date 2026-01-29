<script setup>
    import { ref, computed, watch } from 'vue'

    const props = defineProps({
        items: {
            type: Array,
            default: () => []
        },
        searchKey: {
            type: String,
            default: 'titulo'
        },
        placeholder: {
            type: String,
            default: 'Pesquisar...'
        }
    })

    const emit = defineEmits(['search', 'results', 'voice'])

    const searchQuery = ref('')
    const isSearching = ref(false)

    const filteredItems = computed(() => {
        if(!searchQuery.value.trim()) return []

        const query = searchQuery.value.toLocaleLowerCase().trim()
        return props.items.filter(item  => {
            const value = item[props.searchKey]?.toString().toLowerCase() || ''
            return value.includes(query)
        })
    })

    watch(filteredItems, (newResults) => {
        emit('results', newResults)
    }, { immediate: true });

    const handleSearch = () => {
        isSearching.value = true
        emit('search', searchQuery.value, filteredItems.value)
        setTimeout(() => {
            isSearching.value = false
        }, 500)
    };

    defineExpose({
        clear: () => searchQuery.value = '',
        focus: () => inputRef.value?.focus()
    });

    let inputRef = ref(null)
</script>

<template>
  <div class="searchbar relative group">
    
    <div class="relative flex items-center bg-bg border-3 border-orange-600  rounded-full transition-all duration-300  focus-within:ring-2 ring-orange-500/60">
      
      <button
        @click="handleSearch"
        :disabled="!searchQuery.trim() || isSearching"
        class=" p-2 sm:p-4 text-bg bg-orange-600 rounded-full hover:text-heading disabled:cursor-not-allowed transition-colors hover:cursor-pointer"
        :class="{ 'animate-spin': isSearching }"
      >
        <svg v-if="!isSearching" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      </button>

      <input
        ref="inputRef"
        v-model="searchQuery"
        type="text"
        :placeholder="props.placeholder"
        class="w-full px-4 py-1 bg-transparent font-text text-sm sm:text-md outline-none border-none  text-text  placeholder-clarinho font-regular flex-1"
        @keyup.enter="handleSearch"
      />

      <button
        class="p-1.5 sm:p-3.5 hover:cursor-pointer text-heading hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/30 rounded-full transition-all duration-300 relative"
        :class="{ 'animate-pulse': showVoice }"
        title="Buscar por voz"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
        </svg>
      </button>
    </div>

    <div v-if="filteredItems.length" class="mt-2 text-xs text-textr">
      {{ filteredItems.length }} resultado{{ filteredItems.length !== 1 ? 's' : '' }}
    </div>
  </div>
</template>

<style scoped>
.searchbar {
  @apply relative;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.searchbar .animate-slide-in {
  animation: slideIn 0.3s ease-out;
}
</style>