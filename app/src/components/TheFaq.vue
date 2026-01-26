<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const faqs = [
    {
        pergunta: 'O que é CadARCA?',
        resposta: 'CadARCA é o Cadastro do Sistema da ARCA, destinado a pessoas que não possuem CPF e estão em situação de vulnerabilidade.'
    },
    {
        pergunta: 'O que é o SICAR?',
        resposta: 'SICAR é o sistema da cidade ARCA, onde as pessoas podem pedir auxílios, serviços, dentre outros que resolva o problema da população do ARCA.'
    },
    {
        pergunta: 'Como posso contribuir com as ONGs parceiras?',
        resposta: 'Para contribuição financeira, é possível acessar a aba ONGs e clicar em "Ajudar Ong".'
    },
    {
        pergunta: 'Os cursos estão disponíveis apenas para usuários do CadARCA?',
        resposta: 'Na aba cursos, há diversos cursos divididos em cursos regulares, os quais podem ser acessados por todos os usuários, e cursos CadARCA, específicos para esse tipo de usuário.'
    }    
]

function toggle(index) {
    openIndex.value = openIndex.value == index ? null : index
}

</script>

<template>
    <div class="max-w-3xl mx-auto flex flex-col gap-6">
        <div class="flex flex-col items-center gap-3">
            <h2 class="text-orange-600 text-[40px] font-bold font-sans ">PERGUNTAS FREQUENTES</h2>
            <p class="text-base">Antes de consultar nosso suporte, verifique se sua dúvida não é recorrente</p>
        </div>

        <div v-for="(faq, index) in faqs" :key="index" class="border-b border-blue-300 py-4 flex flex-col gap-2">
            <button @click="toggle(index)" class="w-full flex justify-between items-center">
                <span class="font-semibold text-[24px]">{{ faq.pergunta }}</span>
                <span class="font-semibold text-[24px]">{{ openIndex == index ? '-' : '+' }}</span>
            </button>
            <div v-if="openIndex == index">{{ faq.resposta }}</div>
        </div>
    </div>
</template>
