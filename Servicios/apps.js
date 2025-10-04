// Obtener elementos
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Al hacer clic en una tarjeta
cards.forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalPrice.textContent = card.dataset.price;
    modalDescription.textContent = card.dataset.description;
    modalImg.src = card.dataset.img;
    modal.style.display = 'block';
  });
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar si clic fuera del modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ================== Cargar servicios extra desde JSON ==================
fetch('/Servicios/data/servicios.json')
  .then(response => response.json())
  .then(servicios => {
    const grid = document.querySelector('.servicios-grid');

    servicios.forEach(servicio => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.title = servicio.nombre;
      card.dataset.price = servicio.precio;
      card.dataset.description = servicio.descripcion;
      card.dataset.img = servicio.imagen;

      card.innerHTML = `
        <img src="${servicio.imagen}" alt="${servicio.nombre}">
        <h3>${servicio.nombre}</h3>
        <p>${servicio.precio}</p>
      `;

      // mismo evento que las tarjetas fijas
      card.addEventListener('click', () => {
        modalTitle.textContent = servicio.nombre;
        modalPrice.textContent = servicio.precio;
        modalDescription.textContent = servicio.descripcion;
        modalImg.src = servicio.imagen;
        modal.style.display = 'block';
      });

      grid.appendChild(card);
    });
  })
  .catch(err => console.error("Error cargando servicios.json", err));
