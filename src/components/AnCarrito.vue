<template>
  <div>
    <!-- Icono del carrito -->
    <button @click="toggleCart" class="btn btn-sm border-hover bounce">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag"
        viewBox="0 0 16 16">
        <path
          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
      </svg>
    </button>

    <!-- Ventana emergente del carrito -->
    <div v-if="showCart" class="cart-popup">
      <h4>Cesta</h4>
      <ul>
        <li v-if="cart.length == 0">No tienes ningun producto añadido</li>
        <li v-for="(product, index) in cart" :key="index">
          {{ product.nombreP }} - {{ product.precioP }}
          <button @click="removeFromCart(index, product.precioP)" class="btn btn-danger btn-sm">-</button>
        </li>
      </ul>
      <!-- <h6 v-if="cart.length > 1">Total: {{ getTotal() }} €</h6> -->
      <button @click="showCart = false" class="btn btn-secondary btn-sm">Cerrar</button>
      <button @click="showCart = false" class="btn btn-warning btn-sm"><router-link to="/pago" class="text-decoration-none text-dark">Pagar</router-link></button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CarritoCart',
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    cart(){
      return this.$store.state.cart;
    }
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
    removeFromCart(index, precioP) {
      this.cart.splice(index, 1);
      this.$store.state.total -= parseFloat(precioP);
      if(this.cart.length == 0){
        this.$store.state.total =0;
      }
    },
    ...mapGetters(['getTotal']),
  }
};
</script>

<style>
.cart-popup {
  position: fixed;
  top: 70px;
  right: 20px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 999;
}
</style>