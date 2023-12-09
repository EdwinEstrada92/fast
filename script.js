// Script para generar corazones en posiciones aleatorias
const createHeart = () => {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
  heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración de la animación aleatoria
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000); // Remover el corazón después de 5 segundos
};

setInterval(createHeart, 300); // Generar corazones cada 0.3 segundos

// Referencias a los elementos HTML
const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');

// Función para controlar la reproducción del audio al presionar el botón
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = '❤️ Reproduciendo';
  } else {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
    playButton.textContent = 'Púchame ❤️';
  }
});
