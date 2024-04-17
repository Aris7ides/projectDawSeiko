<template>
    <footer class="text-center py-4 mt-4">
        <div class="row">
            <div class="col-lg-12 col-sm-12">
                <div id="footDatos">
                    <h3>Datos de Contacto</h3>
                    <p>Mislata, Valencia, España 46920</p>
                    <p>seiko@gmail.com</p>
                    <p>+34 611222333</p>
                </div>
                <div>
                    <h3>Redes Sociales</h3>
                    <div id="footRedes" class="d-flex justify-content-center">
                        <router-link to="/" class="mx-3">
                            <img src="../assets/whatsapp.svg" alt="whatsapp">
                        </router-link>
                        <br>
                        <router-link to="/" class="mx-3">
                            <img src="../assets/instagram.svg" alt="instagram">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- https://www.instagram.com/handmade_seiko -->
        <!-- https://api.whatsapp.com/send?phone=[numero de telefono] -->
    </footer>
</template>

<script>

export default {
    name: 'menuItems',
    data() {
        return {

        }
    },
    components: {
    }
}
</script>

<style>
footer {
    background-color: #f7aefb;
    color: #494949;
}

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
    width: 42px;
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