<script setup>
import { onMounted, ref } from 'vue';
import TheHeader from '../components/ui/TheHeader.vue';
import TheFooter from '../components/ui/TheFooter.vue';
import BaseLink from '../components/ui/BaseLink.vue';
import { useRoute, useRouter } from 'vue-router';
import BaseButton from '../components/ui/BaseButton.vue';


const router = useRouter()
const route = useRoute()
const id = Number(useRoute().params.id)

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

const ongEspecifica = ref(null)

const acharOng = () => {
  try {
    ongEspecifica.value = listaDeOngs.value.find(
      ong => ong.id === id
    )
    if(!ongEspecifica) {
      router.replace('/404')
    }
  } catch(error) {
    router.replace('/404')
  }
}

const activeTab = ref('sobre');
const urlAtual = window.location.href;
onMounted(acharOng)

const copied = ref(false)
const link = window.location.href
const copyLink = async() => {
    navigator.clipboard.writeText(link).then(() => {
        copied.value = true
        setTimeout(() => copied.value = false, 2000)
    })
}
</script>


<template>
    <TheHeader/>
  <main v-if="ongEspecifica" class="ui-container-xl mx-auto px-6 sm:px-12 l:px-28 mt-15 mb-25 font-text">
    
    <h1 class="font-bold mb-8 font-title">
      <BaseLink class="max-md:text-2xl" size="5xl" peso="semibold" to="/ongs">ONGs</BaseLink>
      <span class="text-title text-5xl max-md:text-2xl"> > {{ ongEspecifica.titulo }}</span>
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      
      <div class="lg:col-span-6">
        
        <div class="w-full aspect-video bg-[#c4c4c4] rounded-sm mb-8 overflow-clip">
          <img src="/ONG.png" alt="" class="object-cover w-full">
        </div>
        
        
        <div class="flex mb-6 h-13 bg-clarinho">
          <button 
            @click="activeTab = 'sobre'"
            :class="activeTab === 'sobre' ? 'border-b-4 border-title text-title' : 'text-text'"
            class="px-8 py-3 text-xl transition-all hover:bg-bg-blue hover:cursor-pointer"
          >
            Sobre
          </button>
          <button 
            @click="activeTab = 'ajudantes'"
            :class="activeTab === 'ajudantes' ? 'border-b-4 border-title text-title' : 'text-text'"
            class="px-8 py-3 text-xl transition-all hover:bg-bg-blue hover:cursor-pointer"
          >
            Ajudantes
          </button>
        </div>

        
        <div v-if="activeTab === 'sobre'" class="text-text text-lg space-y-6 leading-7">
          <p>
            {{ ongEspecifica.descricao }}
          </p>
        </div>

        <div v-else class="py-10 text-center text-text">
          Lista de ajudantes apareceria aqui.
        </div>
      </div>

      
      <div class="lg:col-span-6 space-y-4">
        
       
        <div class="p-0 sm:p-6 shadow-sm">
          <p class="text-xs font-medium
           text-text mb-1">2 Apoiadores</p>
          <h2 class="text-heading text-xl font-bold mb-6">Titulo muito legal e massa</h2>
          
          
          <div class="w-full bg-[#cbd5e1] rounded-full h-3.5 mb-8">
            <div class="bg-[#ff6b00] h-3.5 rounded-full" :style="{ width: (ongEspecifica.arrecadado / ongEspecifica.meta * 100) + '%' }"></div>
          </div>

          
          <div class="flex justify-between items-start mb-5 font-text">
            <div>
              <p class="text-text text-xl font-bold uppercase mb-1 max-md:text-sm">Meta (R$)</p>
              <p class="text-4xl font-medium text-[#ff6b00] tracking-tighter max-md:text-2xl">{{ ongEspecifica.meta }}</p>
            </div>
            <div class="text-right">
              <p class="text-text text-xl font-bold uppercase mb-1 max-md:text-sm">Arrecadado (R$)</p>
              <p class="text-4xl font-medium text-[#ff6b00] tracking-tighter max-md:text-2xl">{{ ongEspecifica.arrecadado }}</p>
            </div>
          </div>

          <hr class="w-full border-clarinho mb-5">

          
          <div class="space-y-5">
            <div>
              <label class="text-heading block text-sm font-bold mb-1.5">Nome</label>
              <input 
                type="text" 
                placeholder="Digite o nome do Doador" 
                class="w-full p-3.5 border border-clarinho rounded-md bg-bg text-sm outline-none focus:border-orange-600 text-text placeholder:text-clarinho"
              >
            </div>
            <div>
              <label class="text-heading block text-sm font-bold  mb-1.5">Valor</label>
              <input 
                type="text" 
                placeholder="Digite o valor" 
                class="w-full p-3.5 border border-clarinho rounded-md bg-bg text-sm focus:border-orange-600 outline-none text-text placeholder:text-clarinho"
              >
            </div>
            
            <BaseButton style="squared" size="lg" class="w-full rounded-sm h-12">AJUDAR ONG</BaseButton>
          </div>
        </div>

        <div class="relative w-full">
          <BaseButton @click="copyLink" color="blue" style="squared" class="w-full h-12 rounded-sm">{{ urlAtual }}</BaseButton>
          <span v-if="copied" class=" text-center p-2 px-4 bg-bg-blue text-medium font-text w-full text-title absolute top-15 rounded-bl-full">Link Copiado!</span>
        </div>


      </div>
    </div>
  </main>
  <div v-else class="flex justify-center items-center h-[60vh]">
    <h1 class="font-title text-orange-600 text-6xl font-bold">
      ONG não encontrada
    </h1>
  </div>
  <TheFooter/>
</template>