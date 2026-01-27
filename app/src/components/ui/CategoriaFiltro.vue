<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    categorias: {
        type: Array,
        default: () => []
    },
    activeCategoria: {
        type: [String, Number, null],
        default: null
    }
})
const open = ref(false)

const emit = defineEmits(['categoriaChange'])

const allCategorias = computed(() => [
    { id: 'all', nome: 'Todas as Categorias' },
    ...props.categorias
])

const selectCategoria = (categoriaId) => {
    emit('categoriaChange', categoriaId === 'all' ? null : categoriaId)
}
</script>

<template>
    <div class="w-50 lg:w-60 bg-bg-blue border-l-4 border-heading ">
        <button class="p-6 text-title lg:text-xl font-text font-bold flex items-center justify-between w-full hover:cursor-pointer" @click="open = !open">
            CATEGORIAS
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="currentColor" class="fill-heading">
            <path d="M2.5 0C1.83696 0 1.20107 0.308657 0.732233 0.858069C0.263392 1.40748 0 2.15264 0 2.92963L0 20.5074C0 21.2844 0.263392 22.0296 0.732233 22.579C1.20107 23.1284 1.83696 23.437 2.5 23.437H17.5C18.163 23.437 18.7989 23.1284 19.2678 22.579C19.7366 22.0296 20 21.2844 20 20.5074V2.92963C20 2.15264 19.7366 1.40748 19.2678 0.858069C18.7989 0.308657 18.163 0 17.5 0L2.5 0ZM10.625 6.59167V15.0773L13.3075 11.9324C13.3656 11.8643 13.4346 11.8103 13.5105 11.7734C13.5864 11.7366 13.6678 11.7176 13.75 11.7176C13.8322 11.7176 13.9136 11.7366 13.9895 11.7734C14.0654 11.8103 14.1344 11.8643 14.1925 11.9324C14.2506 12.0005 14.2967 12.0813 14.3282 12.1703C14.3596 12.2593 14.3758 12.3546 14.3758 12.4509C14.3758 12.5472 14.3596 12.6426 14.3282 12.7316C14.2967 12.8205 14.2506 12.9014 14.1925 12.9695L10.4425 17.3639C10.3844 17.4321 10.3155 17.4862 10.2395 17.5232C10.1636 17.5601 10.0822 17.5791 10 17.5791C9.91779 17.5791 9.83639 17.5601 9.76046 17.5232C9.68453 17.4862 9.61556 17.4321 9.5575 17.3639L5.8075 12.9695C5.74939 12.9014 5.70329 12.8205 5.67185 12.7316C5.6404 12.6426 5.62421 12.5472 5.62421 12.4509C5.62421 12.3546 5.6404 12.2593 5.67185 12.1703C5.70329 12.0813 5.74939 12.0005 5.8075 11.9324C5.92486 11.7949 6.08403 11.7176 6.25 11.7176C6.33218 11.7176 6.41356 11.7366 6.48948 11.7734C6.5654 11.8103 6.63439 11.8643 6.6925 11.9324L9.375 15.0773V6.59167C9.375 6.39742 9.44085 6.21113 9.55806 6.07378C9.67527 5.93642 9.83424 5.85926 10 5.85926C10.1658 5.85926 10.3247 5.93642 10.4419 6.07378C10.5592 6.21113 10.625 6.39742 10.625 6.59167Z"/>
            </svg>
        </button>
        <ul v-show="open" class="px-6 flex flex-col justify-end w-full text-sm lg:text-base pb-6">
            <button v-for="categoria in allCategorias" :key="categoria.id" @click="selectCategoria(categoria.id ? categoria.id : categoria.ID)"
            class="p-2 w-full text-text hover:bg-bg-blue-hover hover:cursor-pointer transition duration-300 text-left text-sm" 
            :class="[activeCategoria === (categoria.id || categoria.ID) || (categoria.id === 'all' && !activeCategoria) ? 'bg-orange-600 text-white' : 'text-text' ]">
                {{ categoria.nome ? categoria.nome : categoria.Nome }}
            </button>
        </ul>
    </div>
</template>