// Animación suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));

    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Mensaje de bienvenida
window.onload = function() {
  console.log("Bienvenido a SOLDAMAX");
};
