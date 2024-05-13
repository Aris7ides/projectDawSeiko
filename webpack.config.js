const path = require('path');

module.exports = {
  entry: './src/main.js', // Archivo de entrada de tu aplicación Vue.js
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida para los archivos compilados
    filename: 'bundle.js' // Nombre del archivo compilado
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // Identifica archivos .vue
        loader: 'vue-loader' // Utiliza vue-loader para procesar archivos .vue
      },
      // Otros loaders para procesar otros tipos de archivos, como CSS, JS, etc.
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // Alias para el módulo Vue.js
      '@': path.resolve(__dirname, 'src') // Mapeo de @ a la carpeta src
    },
    extensions: ['*', '.js', '.vue', '.json'] // Extensiones que Webpack debería procesar
  },
  devServer: {
    contentBase: './dist' // Carpeta base del servidor de desarrollo
  }
};
