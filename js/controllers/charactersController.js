import CharactersService from '../services/charactersService.js';
import CharactersView from '../views/charactersView.js';

const CharactersController = {
   // Inicializa el componente
   init() {
      console.log('CharactersController.init()...');
      this.loadCharacters();
   },

   // Carga el componente
   loadCharacters() {
      console.log('CharactersController.loadCharacters()...');

      CharactersService.getCharacters()
         .then(characters => {
            CharactersView.render(characters);
         })
         .catch(error => {
            console.error('Error al cargar los personajes:', error);
         });
   },
};

export default CharactersController;
