import axios from 'axios'

//Productos
export const fetchProductos = async () => {
    try {
        const response = await axios.get('http://localhost/back/Producto/readProducto.php');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        console.log('Error al obtener los productos');
    }
};

//Productos by id
export const findProducto = async (idp) => {
    try {
        const response = await axios.get(`http://localhost/back/Producto/findProducto.php?idP=${idp}`);
        return response.data;
    } catch (e) {
        console.log("Error al buscar producto por id, findProducto");
    }
}

//Usuarios
export const fetchUsuarios = async () => {
    try {
        const response = await axios.get('http://localhost/back/Usuario/readUsuario.php');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        console.log('Error al obtener los usuarios');
    }
};

//Categorias
export const fetchCategorias = async () => {
    try {
        const response = await axios.get('http://localhost/back/Categoria/readCategoria.php');
        return response.data;
    } catch (error) {
        console.error('Error al obtener las categorías:', error);
        console.log('Error al obtener las categorías');
    }
};

//Contactos
export const fetchContactos = async () => {
    try {
        const response = await axios.get('http://localhost/back/Contacto/readContacto.php');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los contactos:', error);
        console.log('Error al obtener los contactos');
    }
};

// Reseñas
export const fetchResenyas = async () => {
    try {
        const response = await axios.get('http://localhost/back/Resenya/readResenya.php');
        return response.data;
    } catch (error) {
        console.error('Error al obtener las resenyas:', error);
        console.log('Error al obtener las resenyas');
    }
};