// Vista de Continentes
const ContinentsView = {
   // Contenedor HTML donde se renderizará la vista
   container: "#cont",


   // Método para renderizar la vista
   render(continents) {
      console.log("ContinentsView.render()...");

      // Renderiza el contenido
      let htmlList = "<h2>Continents</h2><ul class='list-group'>";
      for (let i in continents) {
         htmlList += `<li class='list-group-item'>${continents[i].name}</li>`;
      }
      htmlList += "</ul>";

      $(this.container).html(htmlList);
   }
};


// Exporta la vista
export default ContinentsView;
