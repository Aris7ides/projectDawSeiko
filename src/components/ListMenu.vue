<template>
  <div id="itemsMenu" class="container-fluid">
    <hr class="d-lg-none">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link underline-hover">Inicio</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link underline-hover">Sobre Seiko</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/productos" class="nav-link underline-hover">Productos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/#contacto" class="nav-link underline-hover">Contacto</router-link> <!-- REVISAR RUTA-->
      </li>
      <!-- <li class="nav-item">
        <router-link to="/login" class="nav-link underline-hover">Login</router-link>
      </li> -->
      <li class="nav-item" v-if="this.$store.state.isAdmin">
        <router-link to="/crud" class="nav-link underline-hover">Administrar</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'MenuItems'
}
</script>
