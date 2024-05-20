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
        <h4>Productos populares ahora mismo</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eius quod facere, a, consequuntur fuga sunt eum
          laboriosam debitis hic, doloribus voluptas accusamus possimus tempore? Dolore dignissimos minima atque minus.
        </p>
      </div>
      <hr>
      <div>
        <h4>Categorias populares ahora mismo</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eius quod facere, a, consequuntur fuga sunt eum
          laboriosam debitis hic, doloribus voluptas accusamus possimus tempore? Dolore dignissimos minima atque minus.
        </p>
      </div>
      <hr>
      <div>
        <h4>Reseñas de nuestros clientes</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eius quod facere, a, consequuntur fuga sunt eum
          laboriosam debitis hic, doloribus voluptas accusamus possimus tempore? Dolore dignissimos minima atque minus.
        </p>
      </div>
    </div>
    <hr>
    <div id="contacto">
      <FormContact />
    </div>
  </div>
</template>

<script>
import FormContact from '../forms/FormContact.vue'

export default {
  name: 'PagHome',
  data() {
    return {

    }
  },
  components: {
    FormContact
  }
}
</script>