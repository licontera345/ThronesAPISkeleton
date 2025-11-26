// Vista de Continentes
const ContinentsView = {
   // Contenedor HTML donde se renderizará la vista
   container: "#cont",


   // Método para renderizar la vista
   render(continents) {
      console.log("ContinentsView.render()...");

      // Renderiza el contenido
      // document.getElementById("cont").innerHTML = "CONTINENTS (rendered)";
      $(this.container).html(`CONTINENTS (rendered)`);

      // Mostrar los continentes obtenidos por el servicio, recibidos del controlador
      // console.log(continents);
      let htmlList = "<ul>";
      for (let i in continents) {
         htmlList += `<li>${continents[i].name}</li>`;
      }
      htmlList += "</ul>";

      $(this.container).html($(this.container).html() + htmlList);
   }
};


// Exporta la vista
export default ContinentsView;
