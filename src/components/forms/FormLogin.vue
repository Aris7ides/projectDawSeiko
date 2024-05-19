<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-sm-8">
            <form @submit.prevent="login" class="form-horizontal">
                <fieldset>
                <legend class="text-center">Inicio de Sesion</legend>
                <div class="from-group row">
                    <label class="col-sm-2 col-form-label">Correo Electronico:</label>
                    <div class="col-sm-8">
                        <input type="email" v-model="correo" class="form-control border border-dark"
                        placeholder="Correo Electronico" />
                    </div>
                </div>
                <div class="from-group row my-2">
                    <label class="col-sm-2 col-form-label">Contraseña:</label>
                    <div class="col-sm-8">
                        <input type="password" v-model="passwd" class="form-control border border-dark"
                        placeholder="******" />
                    </div>
                </div>
                <div class="from-group text-center">
                    <button type="submit" class="btn btn-primary btn-sm m-2 ">Iniciar Sesion</button>
                </div>
            </fieldset>
        </form>
        <div class="d-flex align-items-center flex-column">
            <router-link to="/register">
                <p class="font-weight-light text-primary">Registrarse</p>
            </router-link>
        </div>
    </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
    name: 'LoginComponent',
    data() {
        return {
            correo: '',
            passwd: ''
        }
    },
    computed: {
        usuario() {
            return this.$store.state.user;
        }
    },
    methods: {
        ...mapMutations(['setUser']),
        ...mapMutations(['setToken']),
        ...mapMutations(['setIsAdmin']),
        login() {
            const formData = new FormData();
            if (this.correo !== '' && this.passwd !== '') {
                formData.append(['email'], this.correo);
                formData.append(['pin'], this.passwd);

                axios
                    .post('http://localhost/back/Sesion/loginUsuario.php', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        if (response.data.success) {
                            //limpio formulario
                            this.correo = '';
                            this.passwd = '';

                            this.setToken(response.data.jwt);
                            this.setUser(response.data.email);
                            if (response.data.tipo == 1) {
                                this.setIsAdmin(true);
                                console.log("es administrador");
                                window.location.href = '/crud';
                            } else {
                                window.location.href = '/productos';
                            }
                        } else {
                            console.log('Error al iniciar sesion [FormLogin]');
                        }
                    })
                    .catch(error => {
                        console.error('Error al iniciar sesision [FormLogin]:', error);
                    });
            }
        }
    }
}
</script>