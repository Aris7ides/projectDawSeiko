import { createRouter, createWebHistory } from 'vue-router'

import PagHome from '@/components/pags/PagHome.vue'
import PagAbout from '@/components/pags/PagAbout.vue'
import PagProductos from '@/components/pags/PagProductos'
import PagDetalle from '@/components/pags/PagDetalle'
import ProductoCRUD from '@/components/ProductoCRUD.vue'

import FormContact from '@/components/forms/FormContact'
import FormLogin from '@/components/forms/FormLogin'
import FormRegister from '@/components/forms/FormRegister.vue'

const routes = [
    { path: '/', component: PagHome },
    { path: '/about', component: PagAbout },
    { path: '/productos', component: PagProductos},
    { path: '/contacto', component: FormContact},
    { path: '/login', component: FormLogin},
    { path: '/register', component: FormRegister},
    { path: '/detalle', component: PagDetalle},
    { path: '/crud', component: ProductoCRUD}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;