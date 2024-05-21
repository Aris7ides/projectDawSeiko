<template>
    <div class="container">
        <p class="d-sm-none d-block"><router-link to="/productos" class="text-dark">VOLVER A PRODUCTOS</router-link></p>
        <div class="row row-clos-1 row-cols-sm-2">
            <div class="col-sm-6">
                <img class="img-fluidDetalle" :src="'/img/' + producto.img_path" alt="img">
            </div>
            <div class="col-sm-6 align-content-center text-center bg-rosa rounded pt-2">
                <h4 class="border rounded border-secondary p-3 bg-light"> {{ producto.nombreP }} - {{ producto.precioP }} €</h4>
                <div class="my-2">
                    <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill=""
                        class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <span>(0)</span> <!--Añadir conteo de reseñas de ese producto-->
                </div>
                <p class="border rounded border-secondary p-3 bg-light"> {{ producto.descripcionP }}</p>
                <div class="row justify-content-center">
                    <p class="btn btn-outline-success btn-sm mx-2 col-6 col-md-4 text-dark underline-hover">
                        <router-link to="/pago" class="text-decoration-none text-dark">
                            AÑADIR
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-bag" viewBox="0 0 16 16">
                                <path
                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                            </svg>
                        </router-link>
                    </p>
                    <p class="btn btn-warning btn-sm mx-2 col-6 col-md-4 underline-hover">
                        <router-link to="/pago" class="text-decoration-none text-dark">
                            COMPRAR AHORA
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
        <div>
            <hr>
            <FormResenya :name-producto="$route.params.nom" :id-producto="$route.params.id" />
        </div>
    </div>
</template>

<script>
import FormResenya from '../forms/FormResenya.vue';
import { findProducto } from '@/api';

export default {
    name: 'PagDetalle',
    data() {
        return {
            paramId: this.$route.params.id,
            producto: ''
        }
    },
    components: {
        FormResenya
    },
    async mounted() {
        await this.getProducto();
    },
    methods: {
        async getProducto() {
            try {
                const res = await findProducto(this.paramId);
                this.producto = res[0];
            } catch (e) {
                console.log("Error al getProducto: " + e)
            }
        }
    }
}
</script>

<style>
.img-fluidDetalle {
    max-width: 100%;
    height: 70vh;
}

.bg-rosa {
    background-color: #f7aefb;
}
</style>