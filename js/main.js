gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-anim", {
  y: 28,
  opacity: 0,
  duration: 0.8,
  stagger: 0.14,
  ease: "power3.out"
});
gsap.from(".servicio-card", {
  scrollTrigger: { trigger: "#servicios", start: "top 80%" },
  y: 35,
  opacity: 0,
  duration: 0.7,
  stagger: 0.18
});

gsap.utils.toArray(".scroll-reveal").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 88%" },
    y: 24,
    opacity: 0,
    duration: 0.65
  });
});

const inputPaginas = document.getElementById("calcPaginas");
const inputPrecio = document.getElementById("calcPrecio");
const salidaCosto = document.getElementById("costoEstimado");

function calcularCosto() {
  const paginas = Number(inputPaginas.value) || 0;
  const precio = Number(inputPrecio.value) || 0;
  const total = Math.max(0, paginas) * Math.max(0, precio);
  salidaCosto.textContent = "$" + total.toLocaleString("es-MX");
}

document.getElementById("btnCalcular").addEventListener("click", calcularCosto);
inputPaginas.addEventListener("input", calcularCosto);
inputPrecio.addEventListener("input", calcularCosto);

document.getElementById("formContacto").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombreContacto").value.trim();
  document.getElementById("estadoContacto").textContent = `Gracias, ${nombre}. Recibimos tu mensaje.`;
  e.target.reset();
});