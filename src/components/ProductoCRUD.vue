<template>
    <h4>Lista de productos</h4>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">NombreP</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="producto in productos" :key="producto.idP">
                <th scope="row">{{ producto.idP }}</th>
                <td><input type="text" v-model="producto.nombreP" :disabled="!producto.editando"></td>
                <td><textarea v-model="producto.descripcionP" :disabled="!producto.editando"></textarea></td>
                <td><input type="number" v-model="producto.precioP" :disabled="!producto.editando"></td>
                <td>
                    <button class="btn btn-outline-warning btn-sm" v-if="!producto.editando" @click="editarProducto(producto)">Editar</button>
                    <button class="btn btn-success btn-sm" v-if="producto.editando" @click="updateProducto(producto)">Actualizar</button>
                    <button class="btn btn-danger btn-sm mx-1" @click="deleteProducto(producto.idP)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>

    <hr>
    <h4>Creacion de producto</h4>
    <form @submit.prevent="createProducto">
        <div class="from-group row">
            <label class="col-sm-2 col-form-label">Nombre Producto:</label>
            <div class="col-sm-10">
                <input class="form-control" type="text" v-model="nomP" placeholder="nombre">
            </div>
        </div>
        <div class="from-group row">
            <label class="col-sm-2 col-form-label">Descripcion Producto:</label>
            <div class="col-sm-10">
                <input class="form-control" type="text" v-model="descP" placeholder="descripcion">
            </div>
        </div>
        <div class="from-group row">
            <label class="col-sm-2 col-form-label">Precio Producto:</label>
            <div class="col-sm-10">
                <input class="form-control" type="number" v-model="precP" placeholder="precio">
            </div>
        </div>
        <button class="btn btn-success btn-sm mx-2" type="submit">Registrar</button>
        <button class="btn btn-outline-secondary btn-sm mx-2" type="reset">Limpiar</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: "ProductCrud",
    data() {
        return {
            productos: [],
            nomP: '',
            descP: '',
            precP: ''
        }
    },
    mounted() {
        this.fetchProductos();
    },
    methods: {
        fetchProductos() {
            axios
                .get('http://localhost/back/Producto/readProducto.php')
                .then(response => (this.productos = response.data))
                .catch(error => {
                    console.error('Error al obtener los productos:', error);
                    console.log('Error al obtener los productos');
                });
        },
        createProducto() {
            const formData = new FormData();
            formData.append('nomP', this.nomP);
            formData.append('descP', this.descP);
            formData.append('precioP', this.precP);

            axios
                .post('http://localhost/back/Producto/createProducto.php', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    if (response.data.success) {
                        this.fetchProductos();
                        this.nomP = '';
                        this.descP = '';
                        this.precP = '';
                    } else {
                        console.log('Error al crear el producto');
                    }
                })
                .catch(error => {
                    console.error('Error al crear el producto:', error);
                });
        },
        deleteProducto(idProducto) {
            if(window.confirm("seguro que quieres borrar este producto?")){
                axios
                .post('http://localhost/back/Producto/deleteProducto.php', { idToDelete: idProducto }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response => {
                    if (response.data.success) {
                        this.fetchProductos();
                        console.log('Producto eliminado correctamente');
                    } else {
                        console.log('Error al eliminar el producto');
                    }
                })
                .catch(error => {
                    console.error('Error al eliminar el producto:', error);
                    
                    if (error.response) {
                        if (error.response.status === 400) {
                            console.log('Error en la solicitud: ' + error.response.data.message);
                        } else if (error.response.status === 500) {
                            console.log('Error interno del servidor: ' + error.response.data.message);
                        } else {
                            console.log('Error: ' + error.response.data.message);
                        }
                    } else {
                        console.log('Error: ' + error.message);
                    }
                });
            }
        },
        editarProducto(producto) {
            producto.editando = true;
        },
        updateProducto(producto) {
            const formData = new FormData();
            formData.append('idP', producto.idP)
            formData.append('nomP', producto.nombreP);
            formData.append('descP', producto.descripcionP);
            formData.append('precioP', producto.precioP);

            axios
                .post('http://localhost/back/Producto/updateProducto.php', formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response => {
                    if (response.data.success) {
                        this.fetchProductos();
                        console.log('Producto actualizado correctamente');
                    } else {
                        console.log(response);
                        console.log('Error al actualizar el producto');
                    }
                })
                .catch(error => {
                    console.error('Error al actualizar el producto:', error);

                    if (error.response) {
                        if (error.response.status === 400) {
                            console.log('Error en la solicitud: ' + error.response.data.message);
                        } else if (error.response.status === 500) {
                            console.log('Error interno del servidor: ' + error.response.data.message);
                        } else {
                            console.log('Error: ' + error.response.data.message);
                        }
                    } else {
                        console.log('Error: ' + error.message);
                    }
                });
            }
    }
}
</script>