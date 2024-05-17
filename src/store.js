import { createStore } from 'vuex'; // Asegúrate de usar createStore en lugar de Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: '',
    token:'',
    isAdmin:false,
    count: 0
    // Definir tu estado inicial aquí
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
    }
  },
  actions: {
    // Definir tus acciones aquí
  },
  getters: {
    // Definir tus getters aquí
  }
});