import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import router from './routes/routes'

// import PagHome from './components/PagHome.vue'
// import PagAbout from './components/PagAbout.vue'
// import PagProductos from './components/PagProductos'
// import FormContact from './components/FormContact'
// import FormLogin from './components/FormLogin'
// import PagDetalle from './components/PagDetalle'

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/', component: PagHome },
//         { path: '/about', component: PagAbout },
//         {path: '/productos', component: PagProductos},
//         {path: '/contacto', component: FormContact},
//         {path: '/login', component: FormLogin},
//         {path: '/detalle', component: PagDetalle}
//     ]
// });

const app = createApp(App)

app.use(router)
app.mount('#app')
