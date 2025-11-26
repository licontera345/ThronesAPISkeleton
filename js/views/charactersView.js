// Vista de personajes
const CharactersView = {
   // Contenedor HTML donde se renderizará la vista
   container: "#char",


   // Método para renderizar la vista
   render(characters) {
      console.log("CharactersView.render()...");

      // Renderiza el contenido
      let htmlList = "<h2>Characters</h2>";
      htmlList += "<div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3\">";

      for (let i in characters) {
         htmlList += `
            <div class=\"col\">
               <div class=\"card h-100 shadow-sm\">
                  <div class=\"card-body\">
                     <h5 class=\"card-title\">${characters[i].fullName}</h5>
                     <p class=\"card-text mb-1\"><strong>Título:</strong> ${characters[i].title || "N/A"}</p>
                     <p class=\"card-text mb-1\"><strong>Familia:</strong> ${characters[i].family || "N/A"}</p>
                  </div>
               </div>
            </div>`;
      }

      htmlList += "</div>";

      $(this.container).html(htmlList);
   }
};


// Exporta la vista
export default CharactersView;
