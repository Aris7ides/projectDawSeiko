<template>
  <div id="itemsMenu" class="container-fluid">
    <hr class="d-lg-none">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Inicio</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">Sobre Seiko</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/productos" class="nav-link">Productos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/#contacto" class="nav-link">Contacto</router-link> <!-- REVISAR RUTA-->
      </li>
      <!-- <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li> -->
      <li class="nav-item" v-if="this.$store.state.isAdmin">
        <router-link to="/crud" class="nav-link">Administrar</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'MenuItems'
}
</script>
