<script setup>
import BaseButton from '../BaseButton.vue';

const props = defineProps({
    oportunidade: {
        type: Object,
        required: true
    }
})

const { ID, Titulo, Salario, Descricao_Curta, Bairro, Cidade, UF_estado, TipoEmprego, EmpregoCategoria } = props.oportunidade

const salarioFormatado = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(Salario)
</script>

<template>
    <div class="p-6 rounded-3xl shadow-lg">
        <div>
            <span class="text-btn-text bg-buttton px-3 py-1 rounded-full font-text font-medium">
                <div v-html="EmpregoCategoria.Icone"></div>
                <span>{{ EmpregoCategoria.Nome }}</span>
            </span>

            <span class="px-2 py-1 rounded-full text-btn-text bg-button text-xs font-text font-medium">{{ salarioFormatado }}</span>
        </div>
        <div>
            <h3 class="text-xl font-text font-bold text-title">{{ Titulo }}</h3>
            <hr class="border-clarinho w-full">
            <p class="text-xs text-text font-text ">{{ Descricao_Curta }}</p>
        </div>
        <div>
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="currentColor" stroke="currentColor" class="fill-title stroke-bg">
                    <path d="M7.5 0.5C11.3758 0.5 14.5 3.56502 14.5 7.32422C14.5 9.4933 13.3916 11.9392 11.9854 14.1514C10.5891 16.3477 8.94677 18.2399 7.97656 19.2871C7.71346 19.5706 7.28548 19.5708 7.02246 19.2871H7.02344C6.05323 18.2399 4.41091 16.3477 3.01465 14.1514C1.60836 11.9392 0.5 9.4933 0.5 7.32422C0.50003 3.56502 3.62416 0.5 7.5 0.5ZM7.52441 3.19824C5.88901 3.1183 4.80523 4.58033 4.75488 6.0332C4.70247 7.54691 5.82498 9.15357 7.52441 9.07129C9.14918 8.99249 10.0825 7.47647 10.0332 6.0332C9.98593 4.65224 9.083 3.27443 7.52441 3.19824Z"/>
                </svg>
                <span class="text-sm text-title font-text font-medium">{{ `${Bairro} - ${Cidade}/${UF_estado}` }}</span>
            </div>
            <span class="text-sm font-text text-title font-semibold">
                <div v-html="TipoEmprego.Icone"></div>
                {{ TipoEmprego.Nome }}
            </span>
        </div>
        <BaseButton color="blue" style="squared">Ver detalhes</BaseButton>
    </div>
</template>