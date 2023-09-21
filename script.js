// Obtén todos los elementos con clase 'Petal1', 'Petal2' y 'Petal3'
const petals = document.querySelectorAll('.Petal1, .Petal2, .Petal3');

// Agrega un evento de clic a cada pétalo
petals.forEach(petal => {
  petal.addEventListener('click', () => {
    // Agrega una clase de animación al pétalo
    petal.classList.add('falling');
  });
});

// Obtén el elemento de audio por su id
const audio = document.getElementById('audio');

// Espera a que la página se cargue completamente
window.addEventListener('load', () => {
  // Reproduce el audio cuando la página se haya cargado completamente
  audio.play();
});
