// Vista de casas
const HousesView = {
   container: '#hous',

   render(houses) {
      console.log('HousesView.render()...');

      let html = '<h2>Houses</h2>';
      html += '<ul class="list-group">';

      houses.forEach(house => {
         html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
               <span>
                  <strong>${house.name}</strong><br>
                  <small>${house.region || 'Región desconocida'}</small>
               </span>
               <span class="badge bg-secondary">${house.words || 'Sin lema'}</span>
            </li>
         `;
      });

      html += '</ul>';

      $(this.container).html(html);
   },
};

export default HousesView;
