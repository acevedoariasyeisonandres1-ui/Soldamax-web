// Animación al cargar la página
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Efecto al hacer scroll
const tarjetas = document.querySelectorAll(".tarjeta, .card");

const mostrarTarjetas = () => {
    const altoPantalla = window.innerHeight;

    tarjetas.forEach((tarjeta) => {
        const posicion = tarjeta.getBoundingClientRect().top;

        if (posicion < altoPantalla - 100) {
            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0)";
        }
    });
};

tarjetas.forEach((tarjeta) => {
    tarjeta.style.opacity = "0";
    tarjeta.style.transform = "translateY(40px)";
    tarjeta.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", mostrarTarjetas);
mostrarTarjetas();

// Mensaje de bienvenida
console.log("Bienvenido a SOLDAMAX - Calidad que une, confianza que perdura.");
