<template>
    <div id="footer" class="container-fluid">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="text-md-start text-center pt-3">
                    <h6 class="mb-3">Horario de atención al cliente:</h6>
                    <div>
                        <ul>
                            <li>Lunes a Viernes de 9:00-21:00</li>
                            <li>Sábados de 9:00-14:00</li>
                            <li>WhatsApp: 611222333</li>
                            <li>Correo: info@seikohandmade.es</li>
                        </ul>
                    </div>
                </div>
                <div class="text-center pt-3">
                    <h6 class="mb-3">Contactanos:</h6>
                    <router-link to="/" class="mx-4">
                        <img src="../assets/whatsapp.svg" alt="whatsapp">
                    </router-link>
                    <router-link to="/" class="mx-4">
                        <img src="../assets/instagram.svg" alt="instagram">
                    </router-link>
                    <router-link to="/#contacto" class="d-block mt-2 text-primary">Contacto</router-link>
                </div>
                <div class="text-md-end text-center pt-3">
                    <h6 class="mb-3">Enlaces de Interes:</h6>
                    <ul>
                        <li>
                            <router-link to="/">Política de reembolso</router-link>
                        </li>
                        <li>
                            <router-link to="/">Política de privacidad</router-link>
                        </li>
                        <li>
                            <router-link to="/">Términos del servicio</router-link>
                        </li>
                        <li>
                            <router-link to="/">Política de envío</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row text-center pt-3">
                <span>© 2024, Seikōhandmade</span>
            </div>

        </div>
    </div>
    <!-- https://www.instagram.com/handmade_seiko -->
    <!-- https://api.whatsapp.com/send?phone=[numero de telefono] -->
</template>

<script>

export default {
    name: 'AnFooter',
}
</script>

<style>
#footer {
    background-color: #f7aefb;
    color: #494949;
}

#footer img {
    width: 32px;
}

#footer ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

/* a{
    display: block;
    width: fit-content;
} */

/* li{
    width: fit-content;
} */

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


/* footer ul {
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