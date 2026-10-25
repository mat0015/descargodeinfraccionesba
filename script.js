// Descargo de Infracciones BA
const WHATSAPP_NUMBER = "541178191580";

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

document.getElementById("year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const nombre = String(formData.get("nombre") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const telefono = String(formData.get("telefono") || "").trim();
  const referencia = String(formData.get("referencia") || "").trim();
  const observaciones = String(formData.get("observaciones") || "").trim();

  const message = [
    "Hola, quiero realizar una consulta a Descargo de Infracciones BA.",
    "",
    `Nombre completo: ${nombre}`,
    `Correo electrónico: ${email}`,
    `Teléfono: ${telefono || "No indicado"}`,
    `Patente o número de documento/acta a consultar: ${referencia}`,
    `Observaciones: ${observaciones || "Sin observaciones adicionales"}`,
    "",
    "Envío estos datos para solicitar orientación sobre mi consulta."
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  formStatus.textContent = "Se abrirá WhatsApp con el mensaje preparado. Revisalo y presioná Enviar para compartirlo.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
