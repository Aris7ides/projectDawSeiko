<template>
    <div>
      <!-- Icono del carrito -->
      <button @click="toggleCart" class="btn btn-success btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-cart" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
      </button>
  
      <!-- Ventana emergente del carrito -->
      <div v-if="showCart" class="cart-popup">
        <h4>Carrito de compras</h4>
        <ul>
          <li v-for="(product, index) in cart" :key="index">
            {{ product.name }} - {{ product.price }}
            <button @click="removeFromCart(index)" class="btn btn-danger btn-sm">-</button>
          </li>
        </ul>
        <button @click="showCart = false" class="btn btn-secondary btn-sm">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarritoCart',
    data() {
      return {
        showCart: false,
        cart: [
          { name: 'Producto 1', price: '$10' },
          { name: 'Producto 2', price: '$15' },
          // Otros productos en el carrito
        ]
      };
    },
    methods: {
      toggleCart() {
        this.showCart = !this.showCart;
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
      }
    }
  };
  </script>
  
  <style>
  .cart-popup {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 999;
  }
  </style>
  