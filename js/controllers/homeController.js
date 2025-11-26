// Importa módulos necesarios: servicios, vistas, controladores
import HomeView from '../views/homeView.js';


const HomeController = {

   // Inicializa el componente
   init() {
      console.log("HomeController.init()...");
      this.loadHome();
   },


   // Carga el componente
   loadHome() {
      console.log("HomeController.loadHome()...");

      // Renderiza el contenido del componente
      HomeView.render();
      this.setupEventsHome();
   },


   // Configura los eventos del componente
   setupEventsHome() {
      console.log("HomeController.setupEvents()...");
      $("#link").click(function (e) {
         e.preventDefault();
         console.log("HomeController.setupEventsHome()...");
      });
   },

};


export default HomeController;
