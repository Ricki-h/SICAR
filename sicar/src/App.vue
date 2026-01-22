<template>
  <TheHeader 
        v-if="showHeader"
  />
  <div>
    Nome: {{ firstName }} <br>
    Sobrenome: {{ lastName }}
  </div>
  <div v-if="acessLevel === 'admin'">
    AI AI AI BOLSONARO
  </div>
  <div v-if="acessLevel === 'comercio'">
    Canva
  </div>
  <img alt="Vue logo" src="./assets/logo.png" style="margin: auto;">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
  },
  data() {
    return {
      showHeader: false,
      firstName: 'Jon',
      lastName: 'Snow',
      acessLevel: 'comercio'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
