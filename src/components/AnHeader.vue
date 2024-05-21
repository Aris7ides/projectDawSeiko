<template>
    <nav id="header" class="navbar navbar-expand-lg mb-2 border-bottom sticky-top scrolled">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img class="pagAbout rounded img-fluid mx-auto d-block" src="../assets/NombreFondo.jpg">
            </router-link>
            <!-- @click="openNav" -->
            <div class="d-sm-none">
                <AnCarrito />
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
                <ListMenu />
                <div class="d-flex mx-2 align-items-center mb-2 mb-sm-0">
                    <div class="m-sm-2" v-if="this.$store.state.user != ''">
                        <div class="d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                            <span class="mx-2 underline-hover">{{ usuario }}</span>
                            <span @click="logOut" class="btn btn-outline-danger bounce p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-power" viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1z" />
                                    <path
                                        d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <!-- <div class="m-sm-2">
                        <p v-if="this.$store.state.user != ''" class="btn btn-secondary btn-sm d-inline">{{ usuario }}
                        </p>
                    </div> -->
                    <div class="m-sm-2" v-if="this.$store.state.user == ''">
                        <button class="btn btn-sm btn-outline-info bounce underline-hover">
                            <router-link to="/login" class="d-flex nav-link">
                                <span class="mx-2">Login</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-power" viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1z" />
                                    <path
                                        d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                                </svg>
                            </router-link>
                        </button>
                        <!-- <button class="btn btn-sm btn-danger" v-if="this.$store.state.user != ''">
                            <span @click="logOut" class="d-flex nav-link">
                                Cerrar sesión
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                            </span>
                        </button> -->
                    </div>
                    <div class="m-sm-2 d-none d-sm-block">
                        <AnCarrito />
                    </div>
                </div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Buscar">
                    <button class="btn btn-sm border-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import ListMenu from './ListMenu.vue';
import AnCarrito from './AnCarrito.vue'
import { mapMutations } from 'vuex';

window.addEventListener('scroll', function () {
    var nav = document.getElementById('header');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

export default {
    name: 'Header-component',
    computed: {
        usuario() {
            return this.$store.state.user;
        }
    },
    components: {
        ListMenu, AnCarrito
    },
    methods: {
        ...mapMutations(['setUser']),
        ...mapMutations(['setToken']),
        ...mapMutations(['setIsAdmin']),
        logOut() {
            this.setUser('');
            this.setIsAdmin(false);
            this.setToken('');
        }
    }
}

</script>

<style>
.scrolled {
    transition: background-color 0.3s ease;
    /* Transición de 0.3 segundos */
    background-color: #f7aefb;
    color: #494949;
}

#header img {
    width: 100%;
    height: 64px;
}

.underline-hover:hover {
    text-decoration: underline;
}

.border-hover:hover {
    border: 1px solid black;
    /* Cambia el color y el grosor del borde según tus necesidades */
}
</style>