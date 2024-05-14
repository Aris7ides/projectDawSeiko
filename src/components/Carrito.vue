<template>
    <div>
      <!-- Icono del carrito -->
      <button @click="toggleCart" class="btn btn-primary">
        <i class="fa fa-shopping-cart"></i> Carrito
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
  