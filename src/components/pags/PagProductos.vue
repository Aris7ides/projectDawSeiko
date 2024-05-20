<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-3 my-4">
            <div class="text-center col-sm-6">
                <span class="d-inline">Filtrar por categorías - </span>
                <select class="border  rounded border-dark d-inline" v-model="id_categoria" @change="filtrarProductosPorCategoria">
                    <option value="">Todas las categorías</option>
                    <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                        {{ categoria.categoria }}
                    </option>
                </select>
            </div>
            <span v-if="buttonFilter" class="d-inline text-danger col-sm-2 text-center text-sm-start my-2 my-sm-0" @click="borrarFiltro">Borrar filtros</span>
            <span class="d-inline text-muted col-sm-2 text-center">Total productos ({{ productosFiltrados.length }})</span>
        </div>
        <div class="row row-cols-2 row-cols-sm-4 justify-content-center">
            <div v-for="p in productosFiltrados" :key="p.idP" class="m-sm-2 mb-3">
                <router-link class="text-dark" :to="'/producto/' + p.nombreP + '/' + p.idP">
                    <div class="bounce">
                        <img class="border rounded border-secondary imgP imgP-sm"
                            :src="p.img_path ? generateImgPath(p.img_path) : '../../assets/img/LetraSinFondo.png'"
                            :alt="p.nombreP">
                        <div class="text-center">
                            <p>{{ p.nombreP }}</p>
                            <span>{{ p.precioP }} €</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchCategorias, fetchProductos } from '@/api';

export default {
    name: 'productosList',
    data() {
        return {
            productos: [],
            categorias: [],
            productosFiltrados: [],
            pathDirectory: '/img/',
            id_categoria: '',
            buttonFilter: false,
        }
    },
    async mounted() {
        await this.cargarProductos();
        this.cargarCategorias();
    },
    methods: {
        async cargarProductos() {
            try {
                this.productos = await fetchProductos();
                this.productosFiltrados = this.productos;
            } catch (error) {
                console.error('Error en la carga de productos:', error);
            }
        },
        generateImgPath(imgName) {
            return this.pathDirectory + imgName;
        },
        async cargarCategorias() {
            try {
                this.categorias = await fetchCategorias();
            } catch (error) {
                console.error('Error en la carga de categorias:', error);
            }
        },
        filtrarProductosPorCategoria() {
            if (this.id_categoria) {
                this.productosFiltrados = this.productos.filter(p => p.id_categoria === this.id_categoria);
                this.buttonFilter=true;
            } else {
                this.productosFiltrados = this.productos;
                // this.cargarProductos();
            }
        },
        borrarFiltro() {
            this.id_categoria = '';
            this.buttonFilter = false;
            this.productosFiltrados = this.productos;
            // this.cargarProductos();
        }
    }
}
</script>

<style>
img.imgP {
    width: 100%;
    height: 250px;
    /* height: 65%; */
    /* background-color: #f7d8f9; */
}


@media (max-width: 576px) {
    img.imgP-sm {
        max-width: 100%;
        height: 25vh;
    }
}

.bounce:hover {
    animation: bounce 0.5s;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}
</style>