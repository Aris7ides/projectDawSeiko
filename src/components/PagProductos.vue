<template>
    <h1>¡Esta deberia ser donde se muestran todos los productos!</h1>
    <router-link to="/detalle">Detalles de un producto</router-link>

    <!--HACIA ABAJO-->
    <h2>Lista de productos</h2>
    <button onclick="window.createModal.showModal()">+ Crear Nuevo Producto</button>

    <!-- Ventana modal para crear nuevo  producto -->
    <dialog id="createModal">
        <button onclick="window.createModal.close()">X</button>
        <form action="./createProducto.php" method="post">
            <label for="nomP">Nombre del Producto:</label>
            <input type="text" name="nomP" id="nomP" autofocus>
            <br>
            <label for="descP">Descripcion:</label>
            <input type="text" name="descP" id="descP">
            <br>
            <label for="precioP">Precio:</label>
            <input type="number" name="precioP" id="precioP">
            <br>
            <!-- añadir selecct de categorias y publico mas adelante -->
            <input type="submit" value="Añadir">
            <input type="reset" value="Limpiar">
        </form>
    </dialog>

    <div id="productosList" style="border: 1px solid gray;"></div>

    <!-- Ventana modal para editar un producto -->
    <dialog id="updateModal">
        <button onclick="window.updateModal.close()">X</button>
        <form action="./updateProducto.php" method="post">
            <div id="updateDatos"></div>
            <!-- añadir selecct de categorias y publico mas adelante -->
            <input type="submit" value="Actualizar">
            <input type="reset" value="Limpiar">
        </form>
    </dialog>
</template>

<script>

export default {
    name: 'productosList',
    data() {
        return {

        }
    },
    methods: {
// let div = document.getElementById("productosList");
// let info = [];

// fetch('./php/readProducto.php')
//     .then(response => response.json())
//     .then((data) => {
//         //Parsea la respuesta a JSON
//         info = JSON.parse(JSON.stringify(data));
//         //Llama a la función y crea una tabla con los productos
//         leerProductos();
//     })
//     .catch(error => {
//         console.log(error);
//     });

// leerProductos() {
//     let cad = `<ol>`;
//     info.forEach(producto => {
//         cad += `<li><ul>
//                 <li>ID: ${producto.idP}</li>
//                 <li>NOMBRE: ${producto.nombreP}</li>
//                 <li>DESCRIPCION: ${producto.descripcionP}</li>
//                 <li>PRECIO: ${producto.precioP}</li>
//                 <button type="button" onclick="eliminarProducto(${producto.idP})">Borrar</button>
//                 <button type="button" onclick="actualizarProducto(${producto.idP}, '${producto.nombreP}', '${producto.descripcionP}', ${producto.precioP})">Actualizar</button>
//                 <br><br>
//                 </ul></li>`;
//     });
//     cad += `</ol>`;
//     div.innerHTML = cad;
// }

// //Elimina un Producto con respecto al id de este
// eliminarProducto(sendId) {
//     if(window.confirm("seguro que quieres borrar este producto?")){
//         $.ajax({
//             type: "POST", //POST para enviar los datos al php
//             url: "./php/deleteProducto.php",
//             data: { idToDelete: sendId }, // Enviar la variable como parte de los datos
//             success: window.location = "./productoList.html"
//         });
//     }else{
//         return;
//     }
// }

// //Actualizar Producto con respecto a su id
// actualizarProducto(idP, nomP, descP, precioP){
//     window.updateModal.showModal();
//     let llenarDatos=document.getElementById("updateDatos");

//     let cad=`<input type="text" name="idP" id="idP" value="${idP}" readonly style="width:15%;">
//     <br>
//     <label for="nomP">Nombre del Producto:</label>
//     <input type="text" name="nomP" id="nomP" value="${nomP}" autofocus>
//     <br>
//     <label for="descP">Descripcion:</label>
//     <input type="text" name="descP" id="descP" value="${descP}">
//     <br>
//     <label for="precioP">Precio:</label>
//     <input type="number" name="precioP" id="precioP" value="${precioP}">
//     <br>`;

//     llenarDatos.innerHTML=cad;
// }
    }
}
</script>