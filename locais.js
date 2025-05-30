const map = L.map('map').setView([-19.9193, -43.9997], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

fetch('locais.json')
  .then(response => response.json())
  .then(dados => {
    dados.locais.forEach(local => {
      L.marker(local.coords)
        .addTo(map)
        .bindPopup(local.nome);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar os locais:', error);
  });