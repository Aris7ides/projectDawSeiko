<template>
    <nav id="header" class="navbar navbar-expand-lg mb-2 border-bottom sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <!-- <img class="mx-4 px-4" src="../assets/titulo-removebg-preview.png"> -->
                <span class="h1">SEIKŌ</span>
            </router-link>
            <button class="navbar-toggler" @click="openNav" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
                <ListMenu />
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

let nav = "";

window.addEventListener("load", function () {
    nav = document.getElementById("navbarColor03");
});

export default {
    name: 'Header-component',
    methods: {
        openNav: function () {
            if (nav.style.display == "none" || nav.style.display == "") {
                // document.body.style.overflow = "hidden";
                nav.style.display = "block";
            } else {
                nav.style.display = "none";
                // document.body.style.overflow = "auto";
            }
        }
    },
    components: {
        ListMenu
    }
}

</script>

<style>
/*HEADER*/

nav {
    background-color: #f7aefb;
    color: #494949;
}

#header img {
    width: 100%;
    height: 32px;
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