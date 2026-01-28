
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import OngSection from '../components/ui/ongs/OngSection.vue' 
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'


const currentPage = ref(1)
const handlePageChange = (page) => {
  currentPage.value = page
}

const listaDeOngs = ref([
  { id: 1, titulo: 'Arboriza', meta: 3000, arrecadado: 2000, descricao: 'A Arboriza é uma ONG dedicada a combater a escassez de áreas verdes em ambientes urbanos com baixa cobertura arbórea, plantando diversas espécies nativas e adaptadas para revitalizar cidades mais sustentáveis.' },
  { id: 2, titulo: ' Instituto Capim Santo', meta: 5000, arrecadado: 2355, descricao: 'Oferece cursos grátis de gastronomia social para vulneráveis, combatendo fome e gerando renda com foco em identidade brasileira.' },
  { id: 3, titulo: 'Fundação Educar', meta: 7000, arrecadado: 470, descricao: 'Distribui milhões de livros infantis pra ONGs e escolas, promovendo leitura em comunidades vulneráveis pelo Brasil.' },
  { id: 4, titulo: 'Aspoan', meta: 500, arrecadado: 90, descricao: 'A ONG começou com 48 pessoas, no ano de 1985, convergindo vários interesses, principalmente a defesa do meio ambiento e um desenvolvimento em tecnologia voltada para agricultura alternativa. Atualmente a ONG trabalha a favor de questões socioambientais, prevendo promover projetos que melhorem a qualidade de vida da cidade de Natal, começando pela Praia de Ponta Negra, onde mora Francisco Iglesias, um dos fundadores da Aspoan.' },
  { id: 5, titulo: 'Social Construction', meta: 8000, arrecadado: 8973, descricao: 'A Social Construction é uma ONG que promove a capacitação profissional gratuita em construção civil para jovens e mulheres de comunidades vulneráveis, oferecendo cursos práticos de alvenaria, elétrica residencial, hidráulica e acabamentos.' },
  { id: 6, titulo: 'Associação Mulheres da Parada', meta: 5000, arrecadado: 3680, descricao: 'Oferece suporte às famílias da comunidade Parada São Jorge, localizada em São Gonçalo. A entidade atua por meio de programas voltados para segurança alimentar, inclusão social produtiva, sustentabilidade ambiental e educação. Os números impressionam: são mais de 37 mil toneladas de alimentos distribuídos, mais de 1,5 mil atendimentos realizados e mais de 2,6 mil kits de higiene entregues.' },
  { id: 7, titulo: 'Guerreiros Pet', meta: 1200, arrecadado: 100, descricao: 'Com trabalhos voltados em prol da causa animal, a organização abriga, realiza resgates e atendimentos veterinários de animais abandonados.' },
  { id: 8, titulo: 'Lar Anália Franco', meta: 6200, arrecadado: 4253, descricao: 'Certificado como Entidade Beneficente de Assistência Social e integrante da Rede PEA – UNESCO, a organização realiza projetos voltados ao apoio pedagógico, atividades esportivas e de lazer, iniciativas voltadas para a arte e cultura, suplementação alimentar, preparação para a inserção no mercado de trabalho e capacitação para a geração de renda familiar.' },
  { id: 9, titulo: 'Projeto Recriando Raízes', meta: 4800, arrecadado: 100, descricao: 'A organização atua no Rio de Janeiro levando educação e capacitação para crianças, jovens e adultos em situação de vulnerabilidade socioeconômica. Seu impacto já resultou em mais de 1 mil jovens formados, mais de 1,8 mil crianças assistidas e mais de 5 mil famílias beneficiadas por cestas básicas.' },
  
])

</script>

<template>
    <div class="min-h-screen  flex flex-col">
      
      <TheHeader />
  
      <main class="max-w-6xl mx-auto py-12 px-6 w-full">
        <h1 class="text-heading text-5xl font-bold text-blue-950 mb-8">ONGs</h1>
        
        <div class="max-w-5xl">
          <OngSection 
          :ong="listaDeOngs" 
          :page="currentPage" 
          :perPage="6"
          @page-change="handlePageChange"
        />
        </div>
        
      </main>
  
      
      <TheFooter />
    </div>
  </template>