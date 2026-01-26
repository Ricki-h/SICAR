<script setup>
    import { computed, onMounted, ref } from 'vue';
    import Hero from '../components/ui/Hero.vue';
    import SearchBar from '../components/ui/SearchBar.vue';
    import TheFooter from '../components/ui/TheFooter.vue';
    import TheHeader from '../components/ui/TheHeader.vue';
    import api from '../services/api';
    import ServiceCard from '../components/ui/servico/ServiceCard.vue';
    import BaseButton from '../components/ui/BaseButton.vue';
    import CardOuvidoria from '../components/ui/CardOuvidoria.vue';
    import Loading from '../components/ui/Loading.vue';

const services = ref([])

const loadData = async () => {
  try {
    const { data } = await api.get('/servicos/all')
    services.value = Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Erro ao carregar serviços:', error)
  }
}

onMounted(loadData)

const randomServices = computed(() => {
    if(!services.value.length) return []
    
    const aleatorio = [...services.value].sort(() => Math.random() - 0.5)

    return aleatorio.slice(0, 4)
})
</script>

<template>
    <TheHeader/>

    <Hero/>

    <main class="mt-4">
        <SearchBar class="lg:max-w-360 mx-auto px-6 sm:px-12 lg:px-28 mb-10"
        :items="todos" search-key="nome" placeholder="Pesquisar..." @search="(query, results) => console.log('Pesquisou:', query, results)" @results="(results) => resultadosFiltrados = results" @voice="() => console.log('Voice ativado')"/>
        
        <section class="ui-container-xl px-6 sm:px-12 lg:px-28 flex flex-col lg:items-center gap-10">
            <div class="lg:text-center flex flex-col gap-1 text-left">
                <h2 class="font-title text-orange-600 font-bold text-4xl">SERVIÇOS</h2>
                <h6 class="text-text font-text">Acesse os melhores serviços para você</h6>
            </div>

            <div class="flex flex-col gap-10 items-center">
                <div v-if="randomServices.length" class="flex sm:justify-evenly gap-4 flex-wrap justify-center">
                    <ServiceCard
                    v-for="service in randomServices"
                    :key="service.id"
                    :service="service"
                    />
                </div>
                <div v-else>
                    <Loading/>
                </div>
    
                <BaseButton color="orange" to="/services" class="lg:max-w-96 sm:max-w-78 w-full">TODOS OS SERVIÇOS</BaseButton>
            </div>

        </section>

        <section class="ui-container-xl px-6 sm:px-12 lg:px-28 flex flex-col lg:items-center gap-10 mt-15">
            <div class="lg:text-center flex flex-col gap-1 text-left">
                <h2 class="font-title text-orange-600 font-bold text-4xl">Ouvidoria</h2>
                <h6 class="text-text font-text">Aqui te ouvimos independentemente do que tem a dizer.</h6>
            </div>
            
            <div class="flex justify-evenly gap-4 flex-wrap">
                <CardOuvidoria to="/denuncia">
                    <template #imagem>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="76" viewBox="0 0 80 76" fill="currentColor" class="fill-heading">
                            <path d="M73.8387 28.252V4C73.8387 2.93913 73.4065 1.92172 72.6372 1.17157C71.8679 0.421427 70.8245 0 69.7365 0H65.6344C57.5162 7.916 42.2644 12.348 32.8172 14.452V57.548C42.2644 59.652 57.5162 64.084 65.6344 72H69.7365C70.8245 72 71.8679 71.5786 72.6372 70.8284C73.4065 70.0783 73.8387 69.0609 73.8387 68V43.748C75.6016 43.306 77.1638 42.3049 78.2792 40.9022C79.3946 39.4995 80 37.775 80 36C80 34.225 79.3946 32.5005 78.2792 31.0978C77.1638 29.6951 75.6016 28.694 73.8387 28.252ZM8.2043 16C6.02838 16 3.94159 16.8429 2.40298 18.3431C0.864379 19.8434 0 21.8783 0 24V48C0 50.1217 0.864379 52.1566 2.40298 53.6569C3.94159 55.1571 6.02838 56 8.2043 56H12.3064L16.4086 76H24.6129V16H8.2043Z"/>
                        </svg>
                    </template>
                    <template #title>
                        DENÚNCIA
                    </template>
                </CardOuvidoria>
                <CardOuvidoria>
                    <template #imagem>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="76" viewBox="0 0 80 76" fill="currentColor" class="fill-heading">
                            <path d="M45.4424 30.1819C43.3801 30.1819 41.7819 31.8287 41.7819 33.862C41.7819 35.8953 43.3801 37.5422 45.4424 37.5422C47.3262 37.5422 48.9244 35.8953 48.9244 33.862C48.9244 31.8287 47.3262 30.1819 45.4424 30.1819ZM20.444 30.1819C18.3816 30.1819 16.7835 31.8287 16.7835 33.862C16.7835 35.8953 18.3816 37.5422 20.444 37.5422C22.3278 37.5422 23.9259 35.8953 23.9259 33.862C23.9259 31.8287 22.3278 30.1819 20.444 30.1819Z"/>
                            <path d="M74.1014 23.1893C69.807 17.117 63.8074 13.0596 57.2274 11.2287V11.2379C55.7008 9.4898 53.9776 7.87972 52.0492 6.44444C37.434 -4.50411 16.9174 -1.16434 6.24843 13.8968C-2.34926 26.1335 -1.98321 42.5931 6.78411 54.2869L6.85553 66.4867C6.85553 66.7811 6.90017 67.0755 6.98945 67.3516C7.46264 68.9064 9.06968 69.7621 10.5696 69.2745L21.8725 65.6035C24.8634 66.6983 27.9525 67.324 31.0237 67.4988L30.9791 67.5356C38.9339 73.5067 49.3619 75.3008 58.9238 72.0438L70.2713 75.8528C70.557 75.9448 70.8516 76 71.1552 76C72.7354 76 74.0121 74.6843 74.0121 73.0558V60.7272C81.8777 49.7235 82.0831 34.5151 74.1014 23.1893ZM23.1224 59.0711L22.051 58.6111L13.2123 61.4633L13.123 51.8948L12.4088 51.0667C4.85565 41.5718 4.35569 27.8907 11.4267 17.853C20.0333 5.69001 36.5323 3.00347 48.2994 11.7807C60.1023 20.6224 62.7182 37.5972 54.1919 49.6867C47.0406 59.798 34.2378 63.5334 23.1224 59.0711ZM68.2089 57.5071L67.4947 58.4271L67.584 67.9956L58.8345 64.9594L57.7631 65.4195C52.7634 67.3332 47.4334 67.4896 42.4962 66.0635L42.4784 66.0543C49.0762 63.9658 55.0579 59.7336 59.3702 53.6429C66.1912 43.9548 67.2983 31.7825 63.3342 21.4044L63.3878 21.4412C65.4412 22.9593 67.325 24.8546 68.9232 27.1455C75.4049 36.3092 75.0389 48.785 68.2089 57.5071Z"/>
                            <path d="M32.9432 30.1819C30.8808 30.1819 29.2827 31.8287 29.2827 33.862C29.2827 35.8953 30.8808 37.5422 32.9432 37.5422C34.827 37.5422 36.4251 35.8953 36.4251 33.862C36.4251 31.8287 34.827 30.1819 32.9432 30.1819Z"/>
                        </svg>
                    </template>
                    <template #title>
                        SOLICITAÇÕES
                    </template>
                </CardOuvidoria>
                <CardOuvidoria>
                    <template #imagem>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="76" viewBox="0 0 80 76" fill="currentColor" class="fill-heading">
                            <path d="M80 34.2C80 32.1844 79.2338 30.2513 77.8699 28.826C76.506 27.4007 74.6561 26.6 72.7273 26.6H49.7455L53.2364 9.234C53.3091 8.854 53.3455 8.436 53.3455 8.018C53.3455 6.46 52.7273 5.016 51.7455 3.99L47.8909 0L23.9636 25.004C22.6182 26.41 21.8182 28.31 21.8182 30.4V68.4C21.8182 70.4156 22.5844 72.3487 23.9483 73.774C25.3122 75.1993 27.1621 76 29.0909 76H61.8182C64.8364 76 67.4182 74.1 68.5091 71.364L79.4909 44.574C79.8182 43.7 80 42.788 80 41.8V34.2ZM0 76H14.5455V30.4H0V76Z"/>
                        </svg>
                    </template>
                    <template #title>
                        ELOGIOS
                    </template>
                </CardOuvidoria>
                <CardOuvidoria>
                    <template #imagem>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="76" viewBox="0 0 80 76" fill="currentColor" class="fill-heading">
                            <path d="M65.4545 45.6H80V0H65.4545M50.9091 0H18.1818C15.1636 0 12.5818 1.9 11.4909 4.636L0.509091 31.426C0.181818 32.3 0 33.212 0 34.2V41.8C0 43.8156 0.766232 45.7487 2.13013 47.174C3.49403 48.5993 5.34388 49.4 7.27273 49.4H30.2182L26.7636 66.766C26.6909 67.146 26.6545 67.526 26.6545 67.944C26.6545 69.54 27.2727 70.946 28.2545 71.972L32.1091 76L56.0364 50.958C57.3818 49.59 58.1818 47.69 58.1818 45.6V7.6C58.1818 5.58435 57.4156 3.65126 56.0517 2.22599C54.6878 0.800712 52.8379 0 50.9091 0Z"/>
                        </svg>
                    </template>
                    <template #title>
                        RECLAMAÇÕES
                    </template>
                </CardOuvidoria>
            </div>

        </section>

        <section class="mb-15">
            <img src="/banner.png" alt="banner" class="w-full mt-15">
        </section>
        <section class="ui-container-xl px-6 sm:px-12 lg:px-28 mb-25">
            <div tabindex="0" class="collapse collapse-plus bg-bg font-text">
                <div class="collapse-title sm:text-xl text-base text-title font-semibold">O que é o SICAR?</div>
                <div class="collapse-content text-text text-sm sm:text-base">
                    O SICAR é o Sistema Integrado da ARCA, uma plataforma na qual os cidadãos podem solicitar auxílios, serviços, dentre outros que resolvam problemas da população no geral.
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus bg-bg font-text">
                <div class="collapse-title sm:text-xl text-base text-title font-semibold">O que é CadARCA?</div>
                <div class="collapse-content text-text text-sm sm:text-base">
                    CadARCA é o Cadastro do Sistema da ARCA, destinado a pessoas que não possuem CPF e estão em situação de vulnerabilidade. è possível fazer um em qualquer ARCA-Center e permite acesso a diversos tipos de ajuda financeira e assistência social, tanto por parte do governo quanto por parte das ONGs.
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus bg-bg font-text">
                <div class="collapse-title sm:text-xl text-base text-title font-semibold">Como posso contribuir com as ONGs parceiras?</div>
                <div class="collapse-content text-text text-sm sm:text-base">
                    Para contribuição financeira, é possível acessar a aba ONGs e clicar em "Ajudar Ong".
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus bg-bg font-text">
                <div class="collapse-title sm:text-xl text-base text-title font-semibold">Os cursos estão disponíveis apenas para usuários do CadARCA?</div>
                <div class="collapse-content text-text text-sm sm:text-base">
                    Na aba cursos, há diversos cursos divididos em cursos regulares, os quais podem ser acessados por todos os usuários, e cursos CadARCA, específicos para esse tipo de usuário.
                </div>
            </div>

        </section>
    </main>

    <TheFooter class="mt-15"/>
</template>
