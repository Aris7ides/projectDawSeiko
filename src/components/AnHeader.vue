<template>
    <nav id="header" class="navbar navbar-expand-lg mb-2 border-bottom sticky-top scrolled">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img class="pagAbout rounded img-fluid mx-auto d-block" src="../assets/NombreFondo.jpg">
                <!-- <span class="h1">SEIKŌ</span> -->
            </router-link>
            <!-- @click="openNav" -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
                <ListMenu />
                <div class="d-flex mx-2">
                    <div class="m-2">
                        <button class="btn btn-sm btn-secondary">
                            <router-link to="/login" class="d-flex nav-link">
                                Login
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                            </router-link>
                        </button>
                    </div>
                    <div class="m-2">
                        <button @click="toggleCart" class="btn btn-sm btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
                        </button>
                    </div>
                </div>
                <form class="d-flex">
                    <input class="form-control me-sm-2" type="search" placeholder="Buscar">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>
    <!-- puede que el boton de menu falle por tener el script de bootstap y tambien un script propio -->
</template>

<script>
import ListMenu from './ListMenu.vue'

// let nav = "";

// window.addEventListener("load", function () {
//     nav = document.getElementById("navbarColor03");
// });

window.addEventListener('scroll', function() {
        var nav = document.getElementById('header');
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

export default {
    name: 'Header-component',
    methods: {
        // openNav: function () {
        //     if (nav.style.display == "none" || nav.style.display == "") {
        //         // document.body.style.overflow = "hidden";
        //         nav.style.display = "block";
        //     } else {
        //         nav.style.display = "none";
        //         // document.body.style.overflow = "auto";
        //     }
        // }
    },
    components: {
        ListMenu
    }
}

</script>

<style>
/*HEADER*/

.scrolled {
    transition: background-color 0.3s ease; /* Transición de 0.3 segundos */
    background-color: #f7aefb;
    color: #494949;
}

/* nav#header {
    background-color: #f7aefb;
    color: #494949;
} */

#header img {
    width: 100%;
    height: 64px;
}

/* #header {
    background-color: #f7aefb;
    color: #494949;
    font-family: "Dancing Script", cursive;
    font-size: 1.5em;
    font-weight: bold;
} 
 #containerHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 90px;
}


#menuMobile img {
    height: 32px;
}

nav {
    display: none;
}

/* nav ul {
    list-style: none;
} */

/**/


/* 
@media only screen and (min-width:600px) {
    #menuMobile{
        display: none;
    }

    header p{
        display: block;
        margin: 0;
    }

    nav{
        display: block;
        text-align: center;
    }

    nav ul{
        display: block;
    }
    
    nav li{
        display: inline;
        margin: 1vw;
    }

    #containerHeader{
        flex-direction: column;
        justify-content: center;
        height: auto;
    }

    #logo{
        text-align: center;
    }
} */
</style>