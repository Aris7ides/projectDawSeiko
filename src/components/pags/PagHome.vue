<template>
  <div class="row">
    <div class="text-center">
      <div class="card d-none d-sm-block">
        <img src="../../assets/Birthday_WIC_Desktop_Hero_2x.png" class="card-img" max-width="100%">
        <!-- <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> -->
        <div class="card-img-overlay">
          <div class="card-title">
            <h2>Plasma tus mejores recuerdos</h2>
            <button class="btn btn-lg btn-outline-primary">
              <router-link to="/productos">EXPLORAR PRODUCTOS</router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-sm-4">
        <div v-if="categorias && categorias.length > 0">
          <h4 class="mb-4">Categorías populares ahora mismo</h4>
          <div class="row row-cols-1 row-cols-sm-4">
            <div v-for="i in categoriasImg" :key="i.idC" class="mb-2">
              <router-link class="text-dark d-flex flex-column align-items-center" :to="'/producto/'">
                <img :src="'/img/'+i.imgPath" alt="a" class="border border-dark rounded-circle bounce" style="width: 175px; height: 175px;">
                <span>{{ i.nomC }}</span>
              </router-link>
            </div>
          </div>
          <button class="btn btn-warning m-4 bounce underline-hover">Ver productos</button>
        </div>
        <hr>
        <div v-if="productos && productos.length > 0">
          <h4 class="mb-4">Productos populares ahora mismo</h4>
          <div class="row row-cols-1 row-cols-sm-4">
            <div v-for="i in 4" :key="i" class="mb-2">
              <router-link class="text-dark d-flex flex-column align-items-center" :to="'/producto/' + productos[i].nombreP + '/' + productos[i].idP">
                <img :src="'/img/'+productos[i].img_path" alt="a" class="border border-dark rounded-circle bounce" style="width: 175px; height: 175px;">
                <span>{{ productos[i].nombreP }}</span>
              </router-link>
            </div>
          </div>
          <button class="btn btn-warning m-4 bounce underline-hover">Ver mas productos</button>
        </div>
        <hr>
        <div>
          <h4>Reseñas de nuestros clientes</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eius quod facere, a, consequuntur fuga sunt
            eum
            laboriosam debitis hic, doloribus voluptas accusamus possimus tempore? Dolore dignissimos minima atque
            minus.
          </p>
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
import { fetchCategorias, fetchProductos } from '@/api';

export default {
  name: 'PagHome',
  data() {
    return {
      productos: [],
      categorias: [],
      categoriasImg: []
    }
  },
  components: {
    FormContact
  },
  async mounted() {
    await this.cargarProductos();
    await this.cargarCategorias();
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
    generateCategoria() {
      let productox=[];
      let categoriax=[];
      for (let i = 0; i < 4; i++) {
        categoriax=this.categorias[i];
        for (let j = 0; j < this.productos.length; j++) {
          if(categoriax.id === this.productos[j].id_categoria){
            productox=this.productos[j];
          }
        }
        this.categoriasImg.push({"idP":productox.idP, "imgPath": productox.img_path, "idC": categoriax.id, "nomC": categoriax.categoria});
        
      }
    }
  },
}
</script>