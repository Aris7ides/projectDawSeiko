<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-xs-12 col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="row">
                            <h3 class="text-center">Detalles del Pago</h3>
                            <img class="img-responsive cc-img"
                                src="https://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png">
                        </div>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>NUMERO DE TARJETA</label>
                                        <div class="input-group">
                                            <input type="tel" class="form-control" placeholder="Numero válido de tarjeta" />
                                            <span class="input-group-addon"><span
                                                    class="fa fa-credit-card"></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-7 col-md-7">
                                    <div class="form-group">
                                        <label>FECHA DE EXPIRACIÓN</label>
                                        <input type="tel" class="form-control" placeholder="MM / YY" />
                                    </div>
                                </div>
                                <div class="col-xs-5 col-md-5 pull-right">
                                    <div class="form-group">
                                        <label>CVV</label>
                                        <input type="tel" class="form-control" placeholder="CVV" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>NOMBRE DE LA TARJETA</label>
                                        <input type="text" class="form-control" placeholder="Nombre del dueño de la tarjeta" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-xs-12">
                                <button class="btn btn-warning btn-md btn-block">Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'FormCard',
    data(){
        return {

        }
    },
}
</script>

<style>
.cc-img {
    margin: 0 auto;
}
</style>