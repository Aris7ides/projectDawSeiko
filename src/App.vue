<template>
  <AnHeader />
  <div class="container">
    <router-view  />
  </div>
  <AnFooter />
</template>

<script>
import AnHeader from './components/AnHeader.vue';
import AnFooter from './components/AnFooter.vue';

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AnHeader, AnFooter
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

#app {
  font-family: 'Times New Roman', Times, serif;
}
</style>
