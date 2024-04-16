import { createRouter, createWebHistory } from 'vue-router'

import PagHome from '../components/PagHome.vue'
import PagAbout from '../components/PagAbout.vue'
import PagProductos from '../components/PagProductos'
import FormContact from '../components/FormContact'
import FormLogin from '../components/FormLogin'
import PagDetalle from '../components/PagDetalle'
import ProductoCRUD from '@/components/ProductoCRUD.vue'

const routes = [
    { path: '/', component: PagHome },
    { path: '/about', component: PagAbout },
    { path: '/productos', component: PagProductos},
    { path: '/contacto', component: FormContact},
    { path: '/login', component: FormLogin},
    { path: '/detalle', component: PagDetalle},
    { path: '/crud', component: ProductoCRUD}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;