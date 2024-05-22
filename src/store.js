import { createStore } from 'vuex'; // Asegúrate de usar createStore en lugar de Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: '',
    token:'',
    isAdmin:false,
    count: 0,
    cart: [],
    total: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setUser(state, newUser) {
      state.user = newUser;
    },
    setToken(state, newToken){
      state.token = newToken;
    },
    setIsAdmin(state, bool){
      state.isAdmin = bool;
    },
    addToCart(state, producto){
      state.cart.push(producto);
    }
  },
  actions: {
    // Definir tus acciones aquí
  },
  getters: {
    getTotal(state){
      for (let i = 0; i < state.cart.length; i++) {
        state.total += parseFloat(state.cart[i].precioP);
      }
      return state.total;
    }
  }
});