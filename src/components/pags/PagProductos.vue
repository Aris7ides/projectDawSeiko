<template>
    <div class="container">
        <div class="row justify-content-center">
            <span>Filtrar - </span>
        </div>
        <div class="row row-cols-2 row-cols-sm-4 justify-content-center">
            <div v-for="p in productos" :key="p.idP" class="m-sm-2 mb-3">
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
        <!-- <div class="d-flex justify-content-center mt-4">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
import { fetchProductos } from '@/api';

export default {
    name: 'productosList',
    data() {
        return {
            productos: [],
            pathDirectory: '/img/',
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
            return this.pathDirectory + imgName;
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
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
</style>