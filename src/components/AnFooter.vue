<template>
    <footer class="text-center py-4 mt-4">
        <div id="footDatos">
            <pre>
                Horario de atención al cliente:
                
                Lunes a Viernes de 9:00 -21:00
                Sábados de 9:00 - 14:00
                
                WhatsApp: 641012401
                Correo: infonekogistore@gmail.com
            </pre>
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
        <!-- https://www.instagram.com/handmade_seiko -->
        <!-- https://api.whatsapp.com/send?phone=[numero de telefono] -->
        <div>
            <div>
                <span>© 2024, Seikō</span>
                <ul>
                    <li>
                        <a>Política de reembolso</a>
                    </li>
                    <li>
                        <a >Política de privacidad</a>
                    </li>
                    <li>
                        <a>Términos del servicio</a>
                    </li>
                    <li>
                        <a>Política de envío</a>
                    </li>
                </ul>
            </div>
        </div>
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