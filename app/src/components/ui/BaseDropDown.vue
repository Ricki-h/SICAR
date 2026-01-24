<script setup>
    defineProps({
        label: {
            type: String,
            required: true
    }
})
</script>

<template>
  <div class="dropdown dropdown-end group">
    <div
      tabindex="0"
      role="button"
      class="cursor-pointer font-medium flex items-center gap-2 select-none text-title"
    >
      <svg
        class="w-4 h-4 transition-transform duration-300 group-focus-within:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>

      {{ label }}
    </div>
    <ul
      tabindex="0"
      class="dropdown-content menu bg-bg rounded-box z-1 w-52 p-2 shadow-md shadow-shadow"
    >
      <slot />
    </ul>
  </div>
</template>