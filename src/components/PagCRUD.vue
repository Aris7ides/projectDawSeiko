<template>
    <!-- ESTA PAGINA DEBE SER SOLO VISIBLE A USUARIOS ADMIN -->

    <div>
        <div class="btn-group text-center mb-4">
            <button class="btn btn-secondary"
                :class="{'active' : botonActivo}"
                :disabled="botonActivo && !prod" 
                @click="prod = !prod, botonActivo = !botonActivo"
                >productos
            </button>
            <button  class="btn btn-secondary"
                :class="{'active' : botonActivo}"
                :disabled="botonActivo && !catg" 
                @click="catg = !catg, botonActivo = !botonActivo"
                >categorias
            </button>
            <button  class="btn btn-secondary"
                :class="{'active' : botonActivo}"
                :disabled="botonActivo && !res" 
                @click="res = !res, botonActivo = !botonActivo"
                >reseñas
            </button>
            <button  class="btn btn-secondary"
                :class="{'active' : botonActivo}"
                :disabled="botonActivo && !cont" 
                @click="cont = !cont, botonActivo = !botonActivo"
                >contactos
            </button>
            <button  class="btn btn-secondary"
                :class="{'active' : botonActivo}"
                :disabled="botonActivo && !user" 
                @click="user = !user, botonActivo = !botonActivo"
                >usuarios
            </button>
        </div>

        <div>
            <div v-if="prod">
                <ProductoCRUD />
            </div>
            
            <div v-if="catg">
                <CategoriaCRUD />
            </div>

            <div v-if="res">
                <ResenyasCRUD />
            </div>

            <div v-if="cont">
                <ContactoCRUD />
            </div>

            <div v-if="user">
                <UsuarioCRUD />
            </div>
        </div>
    </div>

</template>

<script>
import ProductoCRUD from './cruds/ProductoCRUD.vue'
import ContactoCRUD from './cruds/ContactoCRUD.vue';
import UsuarioCRUD from './cruds/UsuarioCRUD.vue';
import CategoriaCRUD from './cruds/CategoriaCRUD.vue'
import ResenyasCRUD from './cruds/ResenyasCRUD.vue';

export default {
    name: 'PagCrud',
    data() {
        return {
            botonActivo: null,
            prod: false,
            cont: false,
            catg: false,
            res: false,
            user: false,
        }
    },
    components: {
        ProductoCRUD, ContactoCRUD, UsuarioCRUD, CategoriaCRUD, ResenyasCRUD
    }
}
</script>