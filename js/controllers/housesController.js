import HousesService from '../services/housesService.js';
import HousesView from '../views/housesView.js';

const HousesController = {
   // Inicializa el componente
   init() {
      console.log('HousesController.init()...');
      this.loadHouses();
   },

   // Carga el componente
   loadHouses() {
      console.log('HousesController.loadHouses()...');

      HousesService.getHouses()
         .then(houses => {
            HousesView.render(houses);
         })
         .catch(error => {
            console.error('Error al cargar las casas:', error);
         });
   },
};

export default HousesController;
