import Global from "../utils/variables.js";


// Servicio para interactuar con la API de personajes
const CharactersService = {

   // Método para obtener todos los personajes
   getCharacters() {
      return fetch(Global.API + "Characters")
         .then(response => {
            if (!response.ok) {
               throw new Error("Error al cargar los personajes");
            }
            return response.json();
         })
         .catch(error => {
            console.error("Error de red:", error);
            throw error;
         });
   },


};


// Exporta el servicio de personajes
export default CharactersService;
