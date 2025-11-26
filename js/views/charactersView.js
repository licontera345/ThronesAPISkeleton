// Vista de personajes
const CharactersView = {
   container: '#char',

   render(characters) {
      console.log('CharactersView.render()...');

      let html = '<h2>Characters</h2>';
      html += '<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">';

      characters.forEach(character => {
         html += `
            <div class="col">
               <div class="card h-100 shadow-sm">
                  <div class="card-body">
                     <h5 class="card-title">${character.fullName}</h5>
                     <p class="card-text mb-1"><strong>Título:</strong> ${character.title || 'N/A'}</p>
                     <p class="card-text mb-1"><strong>Familia:</strong> ${character.family || 'N/A'}</p>
                  </div>
               </div>
            </div>
         `;
      });

      html += '</div>';

      $(this.container).html(html);
   },
};

export default CharactersView;
