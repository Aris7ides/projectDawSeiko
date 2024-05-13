// import Vue from 'vue';
// import Vuex from 'vuex';
import { createStore } from 'vuex'; // Asegúrate de usar createStore en lugar de Vue.use(Vuex);

export default createStore({
  state: {
    count: 0
    // Definir tu estado inicial aquí
  },
  mutations: {
    increment(state) {
      state.count++;
    }
    // Definir tus mutaciones aquí
  },
  actions: {
    // Definir tus acciones aquí
  },
  getters: {
    // Definir tus getters aquí
  }
});


// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     // Aquí puedes definir tus variables de estado inicial
//     // Ejemplo:
//     counter: 0
//   },
//   mutations: {
//     // Aquí defines las mutaciones para cambiar el estado
//     // Ejemplo:
//     INCREMENT(state) {
//       state.counter++;
//     }
//   },
//   actions: {
//     // Aquí defines las acciones para realizar cambios en el estado
//     // Ejemplo:
//     increment(context) {
//       context.commit('INCREMENT');
//     }
//   },
//   getters: {
//     // Aquí defines los getters para acceder al estado de una manera calculada
//     // Ejemplo:
//     counterSquared(state) {
//       return state.counter * state.counter;
//     }
//   }
// });
