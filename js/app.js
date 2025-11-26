// Importa el controlador de productos
import HomeController from './controllers/homeController.js';
import ContinentsController from './controllers/continentsController.js';

// Inicialización de la aplicación
const App = {
   // Método para iniciar la aplicación
   init() {
      console.log("App.init()...");

      // Carga componentes
      HomeController.init();
      ContinentsController.init();
   }
};

// Inicia la aplicación al cargar la página
$(function () {
   App.init();
});
