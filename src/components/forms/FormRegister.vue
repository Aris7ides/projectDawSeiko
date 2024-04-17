<template>
    <form @submit.prevent="createUser" class="form-horizontal">
        <fieldset>
            <legend class="text-center">Registrar nuevo usuario</legend>
            <div class="from-group row">
                <label class="col-sm-2 col-form-label">Usuario:</label>
                <div class="col-sm-8">
                    <input type="text" v-model="user" class="form-control border border-dark" placeholder="usuario" required/>
                </div>
            </div>
            <div class="from-group row">
                <label class="col-sm-2 col-form-label">Correo Electronico:</label>
                <div class="col-sm-8">
                    <input type="email" v-model="correo" class="form-control border border-dark" placeholder="correo electronico" required/>
                </div>
            </div>
            <div class="from-group row my-2">
                <label class="col-sm-2 col-form-label">Contraseña:</label>
                <div class="col-sm-8">
                    <input type="password" v-model="passwd" class="form-control border border-dark" placeholder="******" required/>
                </div>
            </div>
            <div class="from-group row my-2">
                <label class="col-sm-2 col-form-label">Repetir contraseña:</label>
                <div class="col-sm-8">
                    <input type="password" v-model="passwd2" class="form-control border border-dark" placeholder="******" required/>
                </div>
            </div>
            <div class="from-group text-center">
                <button type="submit" class="btn btn-primary btn-sm m-2 ">Registrarse</button>
            </div>
        </fieldset>
    </form>
    <div class="d-flex align-items-center flex-column">
        <router-link to="/login">
            <p class="font-weight-light text-primary">Iniciar Sesion</p>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginComponent',
    data() {
        return {
            user:'',
            correo: '',
            passwd: '',
            passwd2:''
        }
    },
    methods: {
        createUser() {
            const formData = new FormData();
            formData.append('user', this.user);
            formData.append('email', this.correo);
            formData.append('psswd', this.passwd)

            if(this.passwd===this.passwd2 && this.correo){
                axios
                .post('http://localhost/back/Usuario/createUsuario.php', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    if (response.data.success) {
                        this.user = '';
                        this.correo = '';
                        this.passwd = '';
                        this.passwd2 = '';
                        alert('usuario creado');
                        window.location.href='/login';
                    } else {
                        console.log('Error al crear el usuario');
                    }
                })
                .catch(error => {
                    console.error('Error al crear el usuario2:', error);
                });
            }
        }
    }
}
</script>