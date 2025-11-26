import Global from '../utils/variables.js';

// Servicio para interactuar con la API de casas
const HousesService = {
   // Método para obtener todas las casas
   getHouses() {
      return fetch(`${Global.API}Houses`)
         .then(response => {
            if (!response.ok) {
               throw new Error('Error al cargar las casas');
            }
            return response.json();
         })
         .catch(error => {
            console.error('Error de red:', error);
            throw error;
         });
   },
};

export default HousesService;
