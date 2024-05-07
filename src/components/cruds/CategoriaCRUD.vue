<template>
    <button class="btn btn-secondary btn-sm" @click="showForm = !showForm">+ Registrar nueva categoria</button>
    <div v-if="showForm">
        <hr>
        <form @submit.prevent="createCategoria">
            <div class="from-group row my-2">
                <label class="col-sm-2 col-form-label">Nombre Categoria:</label>
                <div class="col-sm-10">
                    <input class="form-control border border-dark" type="text" v-model="categoriaform"
                        placeholder="nombre">
                </div>
            </div>
            <div class="my-2 text-center">
                <button class="btn btn-success btn-sm mx-2" type="submit">Registrar</button>
                <button class="btn btn-outline-secondary btn-sm mx-2" type="reset">Limpiar</button>
            </div>
        </form>
    </div>
    <hr>
    <h4>Lista de categorias</h4>
    <p class="d-block d-sm-none">¡¡no se puede ver la tabla ver en version movil!!</p>
    <table class="table d-none d-sm-block text-center">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Categoria</th>
                <th scope="col">Productos</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(categoriatab, index) in categorias" :key="categoriatab.id">
                <th scope="row">{{ index + 1 }}</th>
                <td><input type="text" v-model="categoriatab.categoria" :disabled="!categoriatab.editando"></td>
                <td>{{ categoriatab.cantidadP }}</td>
                <td>
                    <button class="btn btn-outline-warning btn-sm" v-if="!categoriatab.editando"
                        @click="editarCategoria(categoriatab)">Editar</button>
                    <button class="btn btn-success btn-sm" v-if="categoriatab.editando"
                        @click="updateCategoria(categoriatab)">Actualizar</button>
                    <button v-if="categoriatab.editando" class="btn btn-danger btn-sm mx-1"
                        @click="categoriatab.editando = !categoriatab.editando">X
                    </button>
                    <button v-if="!categoriatab.editando" class="btn btn-danger btn-sm mx-1"
                        @click="deleteCategoria(categoriatab.id)">Eliminar
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios'
import { fetchCategorias } from '@/api';

export default {
    name: "CategoriaCrud",
    data() {
        return {
            categorias: [],
            categoriaform: '',
            showForm: false
        }
    },
    async mounted() {
        this.cargarCategorias();
    },
    methods: {
        async cargarCategorias() {
            try {
                this.categorias = await fetchCategorias();
            } catch (error) {
                console.error('Error en la carga de categorias:', error);
            }
        },
        createCategoria() {
            const formData = new FormData();
            formData.append('categoria', this.categoriaform);

            axios
                .post('http://localhost/back/Categoria/createCategoria.php', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    if (response.data.success) {
                        this.cargarCategorias();
                        this.categoriaform = '';
                    } else {
                        console.log('Error al crear el categoria');
                    }
                })
                .catch(error => {
                    console.error('Error al crear el categoria:', error);
                });
        },
        deleteCategoria(idc) {
            if (window.confirm("seguro que quieres borrar este categoria?")) {
                axios
                    .post('http://localhost/back/Categoria/deleteCategoria.php', { idToDelete: idc }, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
                    .then(response => {
                        if (response.data.success) {
                            this.cargarCategorias();
                            console.log('Categoria eliminado correctamente');
                        } else {
                            console.log('Error al eliminar el categoria');
                        }
                    })
                    .catch(error => {
                        console.error('Error al eliminar el categoria:', error);
                    });
            }
        },
        editarCategoria(categoria) {
            categoria.editando = true;
        },
        updateCategoria(categoria) {
            const formData = new FormData();
            formData.append('id', categoria.id);
            formData.append('categoria', categoria.categoria);

            axios
                .post('http://localhost/back/Categoria/updateCategoria.php', formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response => {
                    if (response.data.success) {
                        this.cargarCategorias();
                        console.log('Categoria actualizado correctamente');
                    } else {
                        console.log(response);
                        console.log('Error al actualizar el categoria');
                    }
                })
                .catch(error => {
                    console.error('Error al actualizar el categoria:', error);
                });
        }
    }
}
</script>

<!-- no se puede borrar categorias si tiene productos asignados
agregar una alerta que lo diga -->