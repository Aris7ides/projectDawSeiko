<template>
    <div id="FormResenya" class="container mb-4">
        <div class="row row-cols-1 row-cols-md-2 container">
            <div class="col-md-8 container mb-4">
                <div class="mb-2 text-center">
                    <h4 class="d-sm-inline">Dejar una reseña </h4>
                    <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <form @submit.prevent="createResenya" class="form-horizontal">
                    <fieldset>
                        <div class="form-group row">
                            <label class="col-lg-2">Nombre</label>
                            <div class="col-lg-10">
                                <input type="text" v-model="nombre" class="form-control border border-dark mb-2" placeholder="Nombre" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-2">Correo Electronico *</label>
                            <div class="col-lg-10">
                                <input type="email" v-model="correo" class="form-control border border-dark mb-2" placeholder="Correo Electronico" required />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-2">Puntuación *</label>
                            <div class="col-lg-10">
                                <input type="number" v-model="calific" class="form-control border border-dark mb-2" placeholder="5" max="5" min="1" required />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-2">Producto</label>
                            <div class="col-lg-10">
                                <input type="number" class="form-control border border-dark mb-2" disabled :placeholder="nameProducto" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-2">Comentario *</label>
                            <div class="col-lg-10">
                                <textarea class="form-control border border-dark mb-2" v-model="coment" rows="3" required></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="text-center text-lg-start row row-cols-1">
                                <!-- <button type="reset"
                                    class="btn btn-outline-secondary btn-sm mx-sm-auto m-1">Limpiar</button> -->
                                <button type="submit" class="btn btn-primary btn-sm mx-sm-auto m-1">Enviar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <!-- <div class="col-md-3 text-white rounded container my-auto">
                
                <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
               
            </div> -->
        </div>
    </div>
    <!-- <form @submit.prevent="createResenya" class="form-horizontal">
        <fieldset>
            <legend class="h4 text-center">Dejar una reseña</legend>
            <div class="form-group row">
                <label class="col-lg-2 border-bottom">Nombre</label>
                <div class="col-lg-10">
                    <input type="text" v-model="nombre" class="form-control border border-dark mb-2"
                        placeholder="Nombre" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-2 border-bottom">Correo Electronico</label>
                <div class="col-lg-10">
                    <input type="email" v-model="correo" class="form-control border border-dark mb-2"
                        placeholder="Correo Electronico" required />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-2 border-bottom">Puntuación</label>
                <div class="col-lg-10">
                    <input type="number" v-model="calific" class="form-control border border-dark mb-2" placeholder="5"
                        max="5" min="1" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-2 border-bottom">Producto</label>
                <div class="col-lg-10">
                    <input type="number" class="form-control border border-dark mb-2" disabled :placeholder="nameProducto"/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-2 border-bottom">Comentario</label>
                <div class="col-lg-10">
                    <textarea class="form-control border border-dark mb-2" v-model="coment" rows="5"
                        required></textarea>
                </div>
            </div>
            <div class="form-group row">
                <div class="text-center text-lg-start">
                    <button type="reset" class="btn btn-outline-secondary m-1 col-lg-2 btn-sm col-10">Limpiar</button>
                    <button type="submit" class="btn btn-primary m-1 col-lg-8 btn-sm col-10">Enviar</button>
                </div>
            </div>
        </fieldset>
    </form> -->
</template>

<script>
import axios from 'axios';

export default {
    name: "FormResenya",
    data() {
        return {
            nombre: '',
            correo: '',
            calific: '',
            coment: '',
            id_producto: this.idProducto
        };
    },
    props: {
        nameProducto: String,
        idProducto: String
    },
    methods: {
        createResenya() {
            const formData = new FormData();
            formData.append('nombre', this.nombre);
            formData.append('email', this.correo);
            formData.append('calific', this.calific);
            formData.append('comentario', this.coment);
            formData.append('id_producto', this.id_producto);

            axios
                .post('http://localhost/back/Resenya/createResenya.php', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    if (response.data.success) {
                        this.nombre = '';
                        this.correo = '';
                        this.calific = '';
                        this.coment = '';
                        this.id_producto = '';
                        // alert('mensaje enviado');
                    } else {
                        console.log('Error al crear el reseña');
                    }
                })
                .catch(error => {
                    console.error('Error al crear el reseña2:', error);
                });

        }
    }
};
</script>