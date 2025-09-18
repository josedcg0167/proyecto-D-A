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
