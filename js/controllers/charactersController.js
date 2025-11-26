// Importa módulos necesarios: servicios y vistas
import CharactersService from "../services/charactersService.js";
import CharactersView from "../views/charactersView.js";


const CharactersController = {

   // Inicializa el componente
   init() {
      console.log("CharactersController.init()...");
      this.loadCharacters();
   },


   // Carga el componente
   loadCharacters() {
      console.log("CharactersController.loadCharacters()...");

      // Pide los datos al servicio
      CharactersService.getCharacters()
         .then(characters => {
            // Renderiza el contenido del componente
            CharactersView.render(characters);
            // this.setupEventsCharacters(characters);
         })
         .catch(error => {
            console.error("Error al cargar los personajes:", error);
         });
   },


   // Configura los eventos del componente
   setupEventsCharacters() {
      console.log("CharactersController.setupEvents()...");
   },

};


export default CharactersController;
