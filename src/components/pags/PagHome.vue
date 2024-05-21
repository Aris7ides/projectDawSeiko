<template>
  <div class="row">
    <div class="text-center">
      <div class="card d-none d-sm-block">
        <img src="../../assets/Birthday_WIC_Desktop_Hero_2x.png" id="card-img" class="card-img" max-width="100%">
        <!-- <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> -->
        <div class="card-img-overlay">
          <div class="card-title">
            <h2>Plasma tus mejores recuerdos</h2>
            <button class="btn btn-lg btn-warning bounce">
              <router-link to="/productos" class="text-decoration-none text-dark underline-hover">EXPLORAR PRODUCTOS</router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-sm-4">
        <div v-if="categorias && categorias.length > 0">
          <h4 class="mb-4">Categorías populares ahora mismo</h4>
          <div class="row row-cols-1 row-cols-sm-4">
            <div v-for="i in categoriasImg" :key="i.idC" class="mb-2">
              <router-link class="text-dark d-flex flex-column align-items-center" :to="'/productos'">
                <img :src="'/img/' + i.imgPath" alt="a" class="border border-dark rounded-circle bounce"
                  style="width: 175px; height: 175px;">
                <span>{{ i.nomC }}</span>
              </router-link>
            </div>
          </div>
          <button class="btn btn-warning m-4 bounce underline-hover"><router-link to="/productos"
              class="text-decoration-none text-dark">Ver productos</router-link></button>
        </div>
        <div v-if="productos && productos.length > 0">
          <hr>
          <h4 class="mb-4">Productos populares ahora mismo</h4>
          <div class="row row-cols-1 row-cols-sm-4">
            <div v-for="i in 4" :key="i" class="mb-2">
              <router-link class="text-dark d-flex flex-column align-items-center"
                :to="'/producto/' + productos[i].nombreP + '/' + productos[i].idP">
                <img :src="'/img/' + productos[i].img_path" alt="a" class="border border-dark rounded-circle bounce"
                  style="width: 175px; height: 175px;">
                <span>{{ productos[i].nombreP }}</span>
              </router-link>
            </div>
          </div>
          <button class="btn btn-warning m-4 bounce underline-hover"><router-link to="/productos"
              class="text-decoration-none text-dark">Ver mas productos</router-link></button>
        </div>
        <div v-if="resenyas && resenyas.length > 1">
          <hr>
          <h4 class="mb-4">Reseñas de clientes</h4>
          <div class="row row-cols-1 row-cols-sm-2">
            <div v-for="i in resenyas.length" :key="i" class="mb-2">
              <div v-for="p in productos" :key="p.idP">
                <div v-if="p.idP == resenyas[i - 1].id_producto">
                  <img :src="'/img/' + p.img_path" alt="a" class="border border-dark rounded-circle bounce"
                    style="width: 175px; height: 175px;">
                  <div>
                    <span>({{ resenyas[i - 1].calific }})</span>
                    <svg v-for="n in parseInt(resenyas[i - 1].calific)" :key="n" xmlns="http://www.w3.org/2000/svg"
                      width="18" height="18" fill="" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div class="row">
                    <span class="h6 mt-2">{{ resenyas[i - 1]?.nombre }}</span>
                    <span>{{ resenyas[i - 1]?.comentario }}</span>
                  </div>
                  <button class="btn btn-warning m-4 bounce underline-hover"><router-link
                      :to="'/producto/' + p.nombreP + '/' + p.idP" class="text-decoration-none text-dark">Ver
                      producto</router-link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div id="contacto" class="col-12 d-flex justify-content-center">
      <FormContact />
    </div>
  </div>
</template>

<script>
import FormContact from '../forms/FormContact.vue'
import { fetchCategorias, fetchProductos, fetchResenyas } from '@/api';

export default {
  name: 'PagHome',
  data() {
    return {
      productos: [],
      categorias: [],
      categoriasImg: [],
      resenyas: []
    }
  },
  components: {
    FormContact
  },
  async mounted() {
    await this.cargarProductos();
    await this.cargarCategorias();
    await this.cargarResenyas();
    this.generateCategoria();
  },
  methods: {
    async cargarProductos() {
      try {
        this.productos = await fetchProductos();
      } catch (error) {
        console.error('Error en la carga de productos:', error);
      }
    },
    async cargarCategorias() {
      try {
        this.categorias = await fetchCategorias();
      } catch (error) {
        console.error('Error en la carga de categorias:', error);
      }
    },
    async cargarResenyas() {
      try {
        this.resenyas = await fetchResenyas();
      } catch (error) {
        console.error('Error en la carga de reseñas:', error);
      }
    },
    generateCategoria() {
      let productox = [];
      let categoriax = [];
      for (let i = 0; i < 4; i++) {
        categoriax = this.categorias[i];
        for (let j = 0; j < this.productos.length; j++) {
          if (categoriax.id === this.productos[j].id_categoria) {
            productox = this.productos[j];
          }
        }
        this.categoriasImg.push({ "idP": productox.idP, "imgPath": productox.img_path, "idC": categoriax.id, "nomC": categoriax.categoria });

      }
    }
  },
}
</script>

<style>
#card-img{
  height: 75vh;
}
</style>