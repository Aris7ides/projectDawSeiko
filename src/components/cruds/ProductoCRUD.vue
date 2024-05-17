<template>
  <button class="btn btn-secondary btn-sm" @click="showForm = !showForm">+ Registrar nuevo producto</button>
  <div v-if="showForm">
    <hr>
    <h4>Creacion de producto</h4>
    <form @submit.prevent="createProducto">
      <div class="from-group row my-2">
        <label class="col-sm-2 col-form-label">Nombre:</label>
        <div class="col-sm-10">
          <input class="form-control border border-dark" type="text" v-model="nomP" placeholder="nombre">
        </div>
      </div>
      <div class="from-group row my-2">
        <label class="col-sm-2 col-form-label">Descripcion:</label>
        <div class="col-sm-10">
          <input class="form-control border border-dark" type="text" v-model="descP" placeholder="descripcion">
        </div>
      </div>
      <div class="from-group row my-2">
        <label class="col-sm-2 col-form-label">Categoria:</label>
        <div class="col-sm-10">
          <select class="form-select border border-dark" v-model="id_categoria">
            <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
              {{ categoria.categoria }}</option>
          </select>
        </div>
      </div>
      <div class="from-group row my-2">
        <label class="col-sm-2 col-form-label">Precio:</label>
        <div class="col-sm-10">
          <input class="form-control border border-dark" type="number" v-model="precP" placeholder="precio">
        </div>
      </div>
      <div class="from-group row my-2">
        <label class="col-sm-2 col-form-label">Imagenes:</label>
        <div class="col-sm-10">
          <input class="form-control border border-dark" type="file" accept="image/*" @change="handleFileChange" required> <!--No tiene v-model revisar si da error-->
        </div>
      </div>
      <div class="my-2 text-center">
        <button class="btn btn-success btn-sm mx-2" type="submit">Registrar</button>
        <button class="btn btn-outline-secondary btn-sm mx-2" type="reset">Limpiar</button>
      </div>
    </form>
  </div>
  <hr>
  <h4>Lista de productos</h4>
  <p class="d-block d-sm-none">¡¡no se puede la tabla ver en version movil!!</p>
  <table class="table d-none d-sm-block text-center">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">NombreP</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Precio</th>
        <th scope="col">Categoria</th>
        <th scope="col">Imagen</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(producto, index) in productos" :key="producto.idP">
        <th scope="row">{{ index + 1 }}</th>
        <td><input type="text" v-model="producto.nombreP" :disabled="!producto.editando"></td>
        <td><textarea v-model="producto.descripcionP" :disabled="!producto.editando"></textarea></td>
        <td><input type="number" v-model="producto.precioP" :disabled="!producto.editando"></td>
        <td>
          <select class="form-select" v-model="producto.id_categoria" :disabled="!producto.editando">
            <option :value="null">Ninguno</option>
            <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
              {{ categoria.categoria }}
            </option>
          </select>
        </td>
        <!-- <td>{{ getNombreCategoria(producto.id_categoria) }}</td> -->
        <td>
          <div v-if="!producto.editando"><input type="text" v-model="producto.img_path" :disabled="!producto.editando"></div>
          <div v-else>
            <input type="file" accept="image/*" @change="handleFileChange">
          </div>
        </td>
        <td>
          <button class="btn btn-outline-warning btn-sm" v-if="!producto.editando"
            @click="editarProducto(producto)">Editar</button>
          <button class="btn btn-success btn-sm" v-if="producto.editando"
            @click="updateProducto(producto)">Actualizar</button>
          <button v-if="producto.editando" class="btn btn-danger btn-sm mx-1"
            @click="producto.editando = !producto.editando">X</button>
          <button v-if="!producto.editando" class="btn btn-danger btn-sm mx-1"
            @click="deleteProducto(producto)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'
import { fetchCategorias, fetchProductos } from '@/api';

export default {
  name: "ProductoCrud",
  data() {
    return {
      productos: [],
      nomP: '',
      descP: '',
      precP: '',
      selectedFile: null,
      showForm: false,
      categorias: [],
      id_categoria: ''
    }
  },
  async mounted() {
    await this.cargarProductos();
    this.cargarCategorias();
  },
  methods: {
    async cargarProductos() {
      try {
        this.productos = await fetchProductos();
      } catch (error) {
        console.error('Error en la carga de productos:', error);
      }
    },
    async cargarCategorias() {
      try {
        this.categorias = await fetchCategorias();
      } catch (error) {
        console.error('Error en la carga de categorias:', error);
      }
    },
    createProducto() {
      let imgName=this.nomP.replace(" ", "");

      const formData = new FormData();
      formData.append('nomP', this.nomP);
      formData.append('descP', this.descP);
      formData.append('precioP', this.precP);
      formData.append('id_categoria', this.id_categoria);
      formData.append('img_path', imgName+"-"+this.selectedFile.name);

      axios
        .post('http://localhost/back/Producto/createProducto.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          if (response.data.success) {
            this.uploadImage(imgName);
            this.cargarProductos();

            //limpio formulario
            this.nomP = '';
            this.descP = '';
            this.precP = '';
            this.id_categoria = '';
          } else {
            console.log('Error al crear el producto [productoCRUD]');
          }
        })
        .catch(error => {
          console.error('Error al crear el producto [productoCRUD]:', error);
        });
    },
    deleteProducto(producto) {
      const formData = new FormData();
      formData.append('idToDelete', producto.idP);
      formData.append('id_categoria', producto.id_categoria);
      formData.append('jwt', this.$store.state.jwt);

      if (window.confirm("seguro que quieres borrar este producto?")) {
        axios
          .post('http://localhost/back/Producto/deleteProducto.php', formData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then(response => {
            if (response.data.success) {
              this.cargarProductos();
              console.log('Producto eliminado correctamente');
            } else {
              console.log('Error al eliminar el producto');
            }
          })
          .catch(error => {
            console.error('Error al eliminar el producto:', error);
          });
      }
    },
    editarProducto(producto) {
      producto.editando = true;
    },
    updateProducto(producto) {
      const formData = new FormData();
      formData.append('idP', producto.idP)
      formData.append('nomP', producto.nombreP);
      formData.append('descP', producto.descripcionP);
      formData.append('precioP', producto.precioP);
      formData.append('id_categoria', producto.id_categoria);
      formData.append('img_path', this.selectedFile ? this.selectedFile.name : producto.img_path);

      axios
        .post('http://localhost/back/Producto/updateProducto.php', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(response => {
          if (response.data.success) {
            this.cargarProductos();
            console.log('Producto actualizado correctamente');
          } else {
            console.log(response);
            console.log('Error al actualizar el producto');
          }
        })
        .catch(error => {
          console.error('Error al actualizar el producto:', error);
        });
    },
    // getNombreCategoria(idCategoria) {
    //   const categoria = this.categorias.find(cat => cat.id === idCategoria);
    //   return categoria ? categoria.categoria : 'no';
    // },
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadImage(nomP) {
      try {
        const formData = new FormData();
        formData.append('image', this.selectedFile);
        formData.append('nomP', nomP);

         await axios.post('http://localhost/back/upload.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // Lógica para guardar el nombre de la imagen en la base de datos
        // Aquí puedes enviar imageName al servidor PHP para almacenarlo en la base de datos
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    }
  }
}
</script>

<!-- HACER que cuando se actualice un producto y su categoria tambien se actualice la cantidad de productos de esa categoria -->