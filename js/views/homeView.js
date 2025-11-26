// Vista de página de inicio
const HomeView = {
   // Contenedor HTML donde se renderizará la vista
   container: "#home",


   // Método para renderizar la vista
   render() {
      console.log("HomeView.render()...");

      // Renderiza el contenido
      const content = `
         <div class="p-3">
            <h2 class="mb-2">Game of Thrones Explorer</h2>
            <p class="mb-3">Explora información básica de personajes, casas y continentes usando <a id='link' href='https://thronesapi.com/'>ThronesAPI</a>.</p>
            <p class="text-muted">Usa las pestañas superiores para navegar por los datos.</p>
         </div>`;

      $(this.container).html(content);


   }
};


// Exporta la vista
export default HomeView;
