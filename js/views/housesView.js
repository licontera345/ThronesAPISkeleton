// Vista de casas
const HousesView = {
   // Contenedor HTML donde se renderizará la vista
   container: "#hous",


   // Método para renderizar la vista
   render(houses) {
      console.log("HousesView.render()...");

      // Renderiza el contenido
      let htmlList = "<h2>Houses</h2>";
      htmlList += "<ul class=\"list-group\">";

      for (let i in houses) {
         htmlList += `
            <li class=\"list-group-item d-flex justify-content-between align-items-center\">
               <span>
                  <strong>${houses[i].name}</strong><br>
                  <small>${houses[i].region || "Región desconocida"}</small>
               </span>
               <span class=\"badge bg-secondary\">${houses[i].words || "Sin lema"}</span>
            </li>`;
      }

      htmlList += "</ul>";

      $(this.container).html(htmlList);
   }
};


// Exporta la vista
export default HousesView;
