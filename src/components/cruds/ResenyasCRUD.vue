<template>
    <h4>Reseñas recibidos</h4>
    <p class="d-block d-sm-none">¡¡no se puede la tabla ver en version movil!!</p>
    <table class="table d-none d-sm-block text-center">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Comentario</th>
                <th scope="col">Calificacion</th>
                <th scope="col">Producto</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(resenya, index) in resenyas" :key="resenya.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ resenya.nombre }}</td>
                <td>{{ resenya.email }}</td>
                <td>{{ resenya.comentario }}</td>
                <td>{{ resenya.calific }}</td>
                <td>{{ resenya.id_producto }}</td>
                <td>
                    <button type="button" class="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                    <button type="button" class="btn btn-danger btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar</button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">No se puede eliminar ni editar un mensaje de resenya.</h5>
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
import { fetchResenyas } from '@/api';

export default {
    name: "ContactoCrud",
    data() {
        return {
            resenyas: [],
        }
    },
    async mounted() {
        try {
            this.resenyas = await fetchResenyas();
        } catch (error) {
            console.error('Error en el montaje de reseñas:', error);
        }
    }
}
</script>

<!-- HACER FORMUARIO DE RESEÑAS Y EL PHP DE RESEÑAS  -->