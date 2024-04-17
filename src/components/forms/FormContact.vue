<template>
    <form @submit.prevent="createContacto" class="form-horizontal">
        <fieldset>
            <legend class="h4 text-center">Contacto</legend>
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
                <label class="col-lg-2 border-bottom">Teléfono</label>
                <div class="col-lg-10">
                    <input type="text" v-model="telf" class="form-control border border-dark mb-2"
                        placeholder="Teléfono" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-2 border-bottom">Mensaje</label>
                <div class="col-lg-10">
                    <textarea class="form-control border border-dark mb-2" v-model="mensj" rows="5" required></textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="col-lg-10 offset-lg-5">
                    <button type="reset" class="btn btn-outline-secondary m-1">Limpiar</button>
                    <button type="submit" class="btn btn-primary m-1">Enviar</button>
                </div>
            </div>
        </fieldset>
    </form>
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
                            alert('mensaje enviado')
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