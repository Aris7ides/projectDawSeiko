<template>
    <form class="form-horizontal">
        <fieldset>
            <legend>Contacto</legend>
            <div class="form-group">
                <label class="col-lg-2 control-label">Nombre</label>
                <div class="col-lg-10">
                    <input type="text" v-model="nombre" class="form-control" placeholder="Nombre" />
                </div>
                <label class="col-lg-2 control-label">Correo Electronico</label>
                <div class="col-lg-10">
                    <input type="email" v-model="correo" class="form-control" placeholder="Correo Electronico" />
                </div>
                <label class="col-lg-2 control-label">Teléfono</label>
                <div class="col-lg-10">
                    <input type="text" v-model="telf" class="form-control" placeholder="Teléfono" />
                </div>
                <label class="col-lg-2 control-label">Mensaje</label>
                <div class="col-lg-10">
                    <textarea class="form-control" v-model="mensj" rows="5"></textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-danger">Limpiar</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: "FormContact",
    data() {
        return {
            contactos: [],
            nombre: '',
            correo:'',
            telf: '',
            mensj: ''
        };
    }
};
</script>