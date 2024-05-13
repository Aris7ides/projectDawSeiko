<template>
    <div class="container">
        <div class="row row-cols-2 row-cols-md-4">
            <div v-for="p in productos" :key="p.idP" class="border">
                <div>
                    <!-- :src="p.img_path ? generateImgPath(p.img_path) : '../../assets/img/logo.png'" -->
                    <img :src="p.img_path ? generateImgPath(p.img_path) : '../../assets/img/logo.png'" :alt="'imagen' + p.img_path" width="100px" height="100px">
                    <p><router-link :to="'/producto/'+ p.nombreP + '/' +  p.idP ">{{ p.nombreP }}</router-link></p>
                    <span>{{ p.precioP }} €</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchProductos } from '@/api';

export default {
    name: 'productosList',
    data() {
        return {
            productos: [],
            pathDirectory : '/img/',
        }
    },
    async mounted() {
        this.cargarProductos();
    },
    methods: {
        async cargarProductos() {
            try {
                this.productos = await fetchProductos();
            } catch (error) {
                console.error('Error en la carga de productos:', error);
            }
        },
        generateImgPath(imgName) {
            return this.pathDirectory+imgName;
        }
    }
}
</script>