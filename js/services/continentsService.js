import Global from '../utils/variables.js';


// Servicio para interactuar con la API REST
const ContinentsService = {

   // Método para obtener todos los continentes
   getContinents() {
      return fetch(Global.API + "Continents")
         .then(response => {
            if (!response.ok) {
               throw new Error('Error al cargar los continentes');
            }
            return response.json();
         })
         .catch(error => {
            console.error('Error de red:', error);
            throw error;
         });
   },


};


// Exporta el servicio de continentes
export default ContinentsService;
