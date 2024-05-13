<template>
    <div>
        <img :src="'/img/'+producto.img_path" alt="img">
        <h2> {{ producto.nombreP }}</h2>
        <h2> {{ producto.precioP }}</h2>
        <h2> {{ producto.descripcionP }}</h2>
        <p class="btn btn-outline-primary btn-md"><router-link to="/pago">Comprar</router-link></p>
        <div>
            <hr>
            <FormResenya :name-producto="$route.params.nom" :id-producto="$route.params.id"/>
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
            producto:''
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
                this.producto= res[0];
            }catch(e){
                console.log("Error al getProducto: " + e)
            }
        }
    }
}
</script>