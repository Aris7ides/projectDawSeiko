<template>
    <div id="FormContacto" class="container mb-3">
        <!-- <h4 class="text-center">Dejar un mensaje:</h4> -->
        <div class="row row-cols-1 row-cols-md-2 container">
            <div class="col-md-8 container mb-2">
                <form @submit.prevent="createContacto" class="form-horizontal">
                    <fieldset>
                        <div class="form-group row mb-2">
                            <label class="col-lg-2 text-center">Nombre</label>
                            <div class="col-lg-10">
                                <input type="text" v-model="nombre" class="form-control border border-dark" placeholder="nombre" />
                            </div>
                        </div>
                        <div class="form-group row mb-2">
                            <label class="col-lg-2  text-center">Email *</label>
                            <div class="col-lg-10">
                                <input type="email" v-model="correo" class="form-control border border-dark"
                                    placeholder="askme@example.com" required />
                            </div>
                        </div>
                        <div class="form-group row mb-2">
                            <label class="col-lg-2  text-center">Teléfono</label>
                            <div class="col-lg-10">
                                <input type="text" v-model="telf" class="form-control border border-dark" placeholder="teléfono" />
                            </div>
                        </div>
                        <div class="form-group row mb-2">
                            <label class="col-lg-2  text-center my-auto">Mensaje *</label>
                            <div class="col-lg-10">
                                <textarea class="form-control border border-dark" v-model="mensj" rows="3" required></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="text-center text-lg-start row row-cols-1 row-cols-sm-2">
                                <button type="reset" class="btn btn-outline-warning btn-sm mx-sm-auto m-1 col-sm-2">Limpiar</button>
                                <button type="submit" class="btn btn-rosa border border-dark btn-sm mx-sm-auto m-1 col-sm-6">Enviar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="col-md-3 bg-light border border-dark rounded container my-auto d-sm-none">
                <p class="h5 text-center">Datos de contacto:</p>
                <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center m-3">
                        <img src="../../assets/phone.svg" alt="" width="18px" class="me-2">
                        <p class="d-inline m-0">+34 611222333</p>
                    </div>
                    <div class="d-flex align-items-center m-3">
                        <img src="../../assets/mail.svg" alt="" width="18px" class="me-2">
                        <p class="d-inline m-0">info@seikohandmade.es</p>
                    </div>
                    <div class="d-flex align-items-center m-3">
                        <img src="../../assets/location.svg" alt="" width="18px" class="me-2">
                        <p class="d-inline m-0">Valencia, España</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "FormContact",
    data() {
        return {
            nombre: '',
            telf: '',
            correo: '',
            mensj: ''
        };
    },
    methods: {
        createContacto() {
            const formData = new FormData();
            formData.append('nombre', this.nombre);
            formData.append('telf', this.telf);
            formData.append('email', this.correo);
            formData.append('mensj', this.mensj);

            if (this.correo && this.mensj) {
                axios
                    .post('http://localhost/back/Contacto/createContacto.php', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        if (response.data.success) {
                            this.nombre = '';
                            this.telf = '';
                            this.mensj = '';
                            this.correo = '';
                            // alert('mensaje enviado');
                        } else {
                            console.log('Error al crear el contacto');
                        }
                    })
                    .catch(error => {
                        console.error('Error al crear el contacto2:', error);
                    });
            }
        }
    }
};
</script>