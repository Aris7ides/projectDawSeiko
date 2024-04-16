<template>
    <form class="form-horizontal">
        <fieldset>
            <legend>Inicio de Sesion</legend>
            <div class="from-group row">
                <label class="col-sm-2 col-form-label">Correo Electronico:</label>
                <div class="col-sm-10">
                    <input type="email" v-model="correo" class="form-control" placeholder="Correo Electronico" />
                </div>
            </div>
            <div class="from-group row my-2">
                <label class="col-sm-2 col-form-label">Contraseña:</label>
                <div class="col-sm-10">
                    <input type="password" v-model="passwd" class="form-control" placeholder="******" />
                </div>
            </div>
            <div class="from-group row">
                <button type="submit" class="btn btn-primary btn-sm btn-block mt-2 ">Iniciar Sesion</button>
            </div>
        </fieldset>
    </form>
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