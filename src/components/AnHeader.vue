<template>
    <div id="header">
        <div id="containerHeader">
            <div id="logo">
                <router-link to="/">
                    <!-- <img src="../assets/titulo-removebg-preview.png"> -->
                    <h2>Seiko</h2>
                    <!-- <p>Regalos personalizados</p> -->
                </router-link>
            </div>
            <!-- Menu para los moviles -->
            <div id="menuMobile">
                <img src="../assets/menubars.svg" @click="openNav()">
            </div>
        </div>

        <nav>
            <ListMenu />
        </nav>
    </div>
</template>

<script>
import ListMenu from './ListMenu.vue'

let nav = "";

window.addEventListener("load", function () {
    nav = document.getElementsByTagName("nav")[0];
});

export default {
    name: 'Header-component',
    methods: {
        openNav: function () {
            if (nav.style.display == "none" || nav.style.display == "") {
                document.body.style.overflow = "hidden";
                nav.style.display = "block";
            } else {
                nav.style.display = "none";
                document.body.style.overflow = "auto";
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

/* #header {
    background-color: #f7aefb;
    color: #494949;
    font-family: "Dancing Script", cursive;
    font-size: 1.5em;
    font-weight: bold;
} */

#containerHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 90px;
}

#logo img {
    width: 100%;
    height: 48px;
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