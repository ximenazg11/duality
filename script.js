// script.js

// Seleccionamos el botón
const botonComprar = document.getElementById("comprarBtn");

// ✅ Tu link de pago real de Mercado Pago
const linkDePago = "https://mpago.li/213DQ7u"; // ← este es el enlace correcto

// Cuando hagan clic, se abre el link de pago en una nueva pestaña
botonComprar.addEventListener("click", () => {
  window.open(linkDePago, "_blank");
});

// Pantalla de carga
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("content").classList.add("visible");
  }, 2000); // 2 segundos
});
