<template>
  <AnHeader />
  <hr>
  <router-view />
  <hr>
  <p>Podria poner el footer aqui</p>
</template>

<script>
import AnHeader from './components/AnHeader.vue';

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AnHeader
}
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
