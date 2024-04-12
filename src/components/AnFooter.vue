<template>
    <footer>
        <div id="footDatos">
            <h3>Datos de Contacto</h3>
            <p>Mislata, Valencia, España 46920</p>
            <p>seiko@gmail.com</p>
            <p>+34 611222333</p>
        </div>
        <div id="footRedes">
            <h3>Redes Sociales</h3>

            <!--
                Cambiar la direccion de ruta
            -->

            <!-- https://api.whatsapp.com/send?phone=[numero de telefono] -->
            <router-link to="/login">
                <img src="../assets/whatsapp.svg" alt="whatsapp">
            </router-link>
            <br>
            <!-- https://www.instagram.com/handmane_seiko -->
            <router-link to="/login">
                <img src="../assets/instagram.svg" alt="instagram">
            </router-link>

            <!--
                Cambiar la direccion de ruta
            -->
        </div>
        <div id="footEnlaces">
            <h3>Enlaces de Interes</h3>
            <ListMenu />
        </div>
    </footer>
</template>

<script>
import ListMenu from './ListMenu.vue'

export default {
    name: 'menuItems',
    data() {
        return {

        }
    },
    components: {
        ListMenu
    }
}
</script>

<style>
/* footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #f7aefb;
    color: #494949;
    text-align: center;
    
    width: 100%;
    position: absolute;
    bottom: 0px;
} */

/* #footContacto {
    border: 1px solid;
} */

#footRedes img {
    width: 60px;
}

/* #footEnlaces ul {
    padding: 0;
    margin: 0;
    list-style: none;
} */

/* footer a {
    color: #494949;
} */

/* @media only screen and (min-width:600px) {
    footer {
        flex-direction: row;
        align-items: flex-start;
    }
} */
</style>