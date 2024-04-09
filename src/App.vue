<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <AnHeader/>
  <AnFooter/>
  <FormContact/>
  <FormLogin/>
  <PagAbout/>
  <PagHome/>
  <PagProductos/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AnHeader from './components/AnHeader.vue';
import AnFooter from './components/AnFooter.vue';
import FormContact from './components/FormContact.vue';
import FormLogin from './components/FormLogin.vue';
import PagHome from './components/PagHome.vue';
import PagAbout from './components/PagAbout.vue';
import PagProductos from './components/PagProductos.vue';

export default {
  name: 'App',
  components: {
    AnHeader, AnFooter, FormContact, FormLogin, PagAbout, PagHome, PagProductos ,HelloWorld
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
