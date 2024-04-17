<template>
    <hr class="d-lg-none">
    <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Inicio
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Sobre Seiko</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/productos" class="nav-link">Productos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacto" class="nav-link">Contacto</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/crud" class="nav-link">CrudPrueba</router-link>
        </li>
      </ul>
    <!-- <div>
        <ul class="d-flex flex-column align-items-center">
            <router-link class="d-block" to="/">
                <li>Inicio</li>
            </router-link>
            <router-link class="d-block" to="/about">
                <li>Sobre Seiko</li>
            </router-link>
            <router-link class="d-block" to="/productos">
                <li>Productos</li>
            </router-link>
            <router-link class="d-block" to="/contacto">
                <li>Contacto</li>
            </router-link>
            <router-link class="d-block" to="/login">
                <li>login</li>
            </router-link>
            <router-link class="d-block" to="/crud">
                <li>crudPrueba</li>
            </router-link>
        </ul>
    </div> -->
</template>

<script>
export default {
    name: 'MenuItems'
}
</script>

<style>

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

a{
    display: block;
    width: fit-content;
}

li{
    width: fit-content;
}

</style>