<template>
    <h4>Mensajes recibidos</h4>
    <p class="d-block d-sm-none">¡¡no se puede la tabla ver en version movil!!</p>
    <table class="table d-none d-sm-block text-center">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">NombreC</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                <th scope="col">Mensaje</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(contacto, index) in contactos" :key="contacto.idC">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ contacto.idC }}</td>
                <td>{{ contacto.nombre_contacto }}</td>
                <td>{{ contacto.telefono }}</td>
                <td>{{ contacto.email }}</td>
                <td>{{ contacto.mensaje }}</td>
                <td>
                    <!-- <button class="btn btn-outline-warning btn-sm" @click="editarProducto(contacto)">Editar</button>
                    <button class="btn btn-danger btn-sm mx-1" @click="deleteProducto(contacto.idC)">Eliminar</button> -->
                    <button type="button" class="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                    <button type="button" class="btn btn-danger btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar</button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">No se puede eliminar ni editar un mensaje de contacto.</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { fetchContactos } from '@/api';

export default {
    name: "ContactoCrud",
    data() {
        return {
            contactos: [],
        }
    },
    async mounted() {
        try {
            this.contactos = await fetchContactos();
        } catch(error) {
            console.error('Error en el montaje de contactos:', error);
        }
    }
}
</script>