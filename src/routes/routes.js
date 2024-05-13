import { createRouter, createWebHistory } from 'vue-router'

import PagHome from '@/components/pags/PagHome.vue'
import PagAbout from '@/components/pags/PagAbout.vue'
import PagProductos from '@/components/pags/PagProductos'
import PagDetalle from '@/components/pags/PagDetalle'
import PagCRUD from '@/components/PagCRUD.vue'

// import FormContact from '@/components/forms/FormContact'
import FormLogin from '@/components/forms/FormLogin'
import FormRegister from '@/components/forms/FormRegister.vue'
import FormCard from '@/components/forms/FormCard.vue'

const routes = [
    { path: '/', component: PagHome },
    { path: '/about', component: PagAbout },
    { path: '/productos', component: PagProductos },
    { path: '/producto/:nom/:id', component: PagDetalle},
    { path: '/login', component: FormLogin },
    { path: '/register', component: FormRegister },
    { path: '/crud', component: PagCRUD },
    { path: '/pago', component: FormCard },
    // { path: '/contacto', component: FormContact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;