// Importa módulos necesarios: servicios, vistas, controladores
import ContinentsService from '../services/continentsService.js';
import ContinentsView from '../views/continentsView.js';


const ContinentsController = {

   // Inicializa el componente
   init() {
      console.log("ContinentsController.init()...");
      this.loadContinents();
   },


   // Carga el componente
   loadContinents() {
      console.log("ContinentsController.loadContinents()...");

      // Pide los datos al servicio
      ContinentsService.getContinents()
         .then(continents => {
            // Renderiza el contenido del componente
            ContinentsView.render(continents);
            // this.setupEventsContinents(continents);
         })
         .catch(error => {
            console.error('Error al cargar los continentes:', error);
         });
   },


   // Configura los eventos del componente
   setupEventsContinents() {
      console.log("ContinentsController.setupEvents()...");
   },

};


export default ContinentsController;
