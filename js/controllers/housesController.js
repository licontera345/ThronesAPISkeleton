// Importa módulos necesarios: servicios y vistas
import HousesService from "../services/housesService.js";
import HousesView from "../views/housesView.js";


const HousesController = {

   // Inicializa el componente
   init() {
      console.log("HousesController.init()...");
      this.loadHouses();
   },


   // Carga el componente
   loadHouses() {
      console.log("HousesController.loadHouses()...");

      // Pide los datos al servicio
      HousesService.getHouses()
         .then(houses => {
            // Renderiza el contenido del componente
            HousesView.render(houses);
            // this.setupEventsHouses(houses);
         })
         .catch(error => {
            console.error("Error al cargar las casas:", error);
         });
   },


   // Configura los eventos del componente
   setupEventsHouses() {
      console.log("HousesController.setupEvents()...");
   },

};


export default HousesController;
