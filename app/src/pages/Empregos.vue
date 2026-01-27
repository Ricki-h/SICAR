<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import api from '../services/api'

import SearchBar from '../components/ui/SearchBar.vue'
import CategoriaFiltro from '../components/ui/CategoriaFiltro.vue'
import EmpregoSection from '../components/ui/servico/EmpregoSection.vue'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import Loading from '../components/ui/Loading.vue'

const empregos = ref([])
const categorias = ref([])
const searchResults = ref([])
const categoriaAtiva = ref(null)
const loading = ref(true)

const pageRegulares = ref(1)
const pageCadarca = ref(1)

const PER_PAGE = 6


onMounted(async () => {
  const { data: oportunidades } = await api.get('/empregooportunidades/all')
  const { data: categoriasApi } = await api.get('/empregocategoria/all')
  empregos.value = oportunidades
  categorias.value = categoriasApi
  loading.value = false
})

watch([searchResults, categoriaAtiva], () => {
  pageRegulares.value = 1
  pageCadarca.value = 1
})

const filtered = computed(() => {
  let base = searchResults.value.length
    ? searchResults.value
    : empregos.value

  if (categoriaAtiva.value) {
    base = base.filter(
      s => s?.CategoriaServico?.id === categoriaAtiva.value
    )
  }

  return base
})

const regulares = computed(() =>
  filtered.value.filter(s => !s.desabrigado)
)

const cadarca = computed(() =>
  filtered.value.filter(s => s.desabrigado)
)
</script>