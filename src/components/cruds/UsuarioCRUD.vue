<template>
    <button class="btn btn-secondary btn-sm" @click="showForm = !showForm">+ Registrar nuevo usuario</button>
    <div v-if="showForm">
        <hr>
        <h4>Creacion de usuario</h4>
        <!-- en el componente de registro puedo pasrle un props para que no muestre de inicio de sesion o colores -->
        <FormRegister />
    </div>
    <hr>
    <h4>Lista de usuarios</h4>
    <p class="d-block d-sm-none">¡¡no se puede la tabla ver en version movil!!</p>
    <table class="table d-none d-sm-block text-center">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Passwd</th>
                <th scope="col">Tipo</th>
                <th class="col-3" scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
                <th scope="row">{{ index + 1 }}</th>
                <td><input type="text" v-model="usuario.user" :disabled="!usuario.editando"></td>
                <td><input type="email" v-model="usuario.email" :disabled="!usuario.editando"></td>
                <td><input type="password" v-model="usuario.psswd" :disabled="!usuario.editando"></td>
                <td><input type="text" v-model="usuario.Tipo" :disabled="!usuario.editando"></td>
                <td>
                    <button class="btn btn-outline-warning btn-sm" v-if="!usuario.editando"
                        @click="editarUsuario(usuario)">Editar</button>
                    <button class="btn btn-success btn-sm" v-if="usuario.editando"
                        @click="updateUsuario(usuario)">Actualizar</button>
                    <button v-if="usuario.editando" class="btn btn-danger btn-sm mx-1"
                        @click="usuario.editando = !usuario.editando">X</button>
                    <button v-if="!usuario.editando" class="btn btn-danger btn-sm mx-1" @click="deleteUsuario(usuario.id)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios'
import FormRegister from '../forms/FormRegister.vue';

export default {
    name: "UsuarioCrud",
    data() {
        return {
            usuarios: [],
            nomP: '',
            descP: '',
            precP: '',
            showForm: false
        }
    },
    components: {
        FormRegister
    },
    mounted() {
        this.fetchUsuarios();
    },
    methods: {
        fetchUsuarios() {
            axios
                .get('http://localhost/back/Usuario/readUsuario.php')
                .then(response => (this.usuarios = response.data))
                .catch(error => {
                    console.error('Error al obtener los usuarios:', error);
                    console.log('Error al obtener los usuarios');
                });
        },
        deleteUsuario(idUsuario) {
            if (window.confirm("seguro que quieres borrar este usuario?")) {
                axios
                    .post('http://localhost/back/Usuario/deleteUsuario.php', { idToDelete: idUsuario }, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
                    .then(response => {
                        if (response.data.success) {
                            this.fetchUsuarios();
                            console.log('Usuario eliminado correctamente');
                        } else {
                            console.log('Error al eliminar el usuario 2');
                        }
                    })
                    .catch(error => {
                        console.error('Error al eliminar el usuario:', error);

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
        editarUsuario(usuario) {
            usuario.editando = true;
        },
        updateUsuario(usuario) {
            const formData = new FormData();
            formData.append('id', usuario.id)
            formData.append('user', usuario.user);
            formData.append('email', usuario.email);
            formData.append('psswd', usuario.psswd);

            axios
                .post('http://localhost/back/Usuario/updateUsuario.php', formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response => {
                    if (response.data.success) {
                        this.fetchUsuarios();
                        console.log('Usuario actualizado correctamente');
                    } else {
                        console.log(response);
                        console.log('Error al actualizar el usuario');
                    }
                })
                .catch(error => {
                    console.error('Error al actualizar el usuario:', error);

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