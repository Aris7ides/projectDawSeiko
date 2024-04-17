<template>
    <form class="form-horizontal">
        <fieldset>
            <legend class="text-center">Inicio de Sesion</legend>
            <div class="from-group row">
                <label class="col-sm-2 col-form-label">Correo Electronico:</label>
                <div class="col-sm-8">
                    <input type="email" v-model="correo" class="form-control border border-dark" placeholder="Correo Electronico" />
                </div>
            </div>
            <div class="from-group row my-2">
                <label class="col-sm-2 col-form-label">Contraseña:</label>
                <div class="col-sm-8">
                    <input type="password" v-model="passwd" class="form-control border border-dark" placeholder="******" />
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
</template>

<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            correo: '',
            passwd: ''
        }
    }
}
</script>