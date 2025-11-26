// Importa el controlador de productos
import HomeController from './controllers/homeController.js';
import ContinentsController from './controllers/continentsController.js';
import CharactersController from './controllers/charactersController.js';
import HousesController from './controllers/housesController.js';

// Inicialización de la aplicación
const App = {
   // Método para iniciar la aplicación
   init() {
      console.log("App.init()...");

      // Carga componentes
      HomeController.init();
      ContinentsController.init();
      CharactersController.init();
      HousesController.init();
   }
};

// Inicia la aplicación al cargar la página
$(function () {
   App.init();
});
