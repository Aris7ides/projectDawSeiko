<template>
    <div id="FormResenya" class="container mb-4">
        <h4 class="text-center">Dejar una reseña</h4>
        <div class="row row-cols-1 row-cols-md-2 container">
            <div class="col-md-8 container mb-4">
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
                            <div class="text-center text-lg-start row row-cols-1 row-cols-md-3">
                                <button type="reset"
                                    class="btn btn-outline-secondary btn-sm mx-sm-auto m-1">Limpiar</button>
                                <button type="submit" class="btn btn-secondary btn-sm mx-sm-auto m-1">Enviar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="col-md-3 bg-secondary text-white rounded container my-auto">
                <p class="h5 text-center">Algo</p>
                <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center">
                    </div>
                    <div class="d-flex align-items-center">
                    </div>
                    <div class="d-flex align-items-center">
                    </div>
                </div>
            </div>
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