// Vista de página de inicio
const HomeView = {
   // Contenedor HTML donde se renderizará la vista
   container: "#home",


   // Método para renderizar la vista
   render() {
      console.log("HomeView.render()...");

      // Renderiza el contenido
      $(this.container).html(`HOME (rendered)<BR>`);
      $(this.container).html($(this.container).html() + `<a id='link' href='https://thronesapi.com/'>ThronesAPI.com</a>`);


   }
};


// Exporta la vista
export default HomeView;
