document.addEventListener("DOMContentLoaded", function () {
    // Menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
  
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("nav-open");
    });
  
    // Botón volver arriba
    const backToTopBtn = document.querySelector(".back-to-top");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  
    // Validación del formulario
    const form = document.getElementById("contact-form");
    const msg = document.getElementById("form-msg");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
  
        if (!nombre || !correo || !mensaje) {
          msg.textContent = "Por favor completa todos los campos.";
          msg.style.color = "var(--color-error)";
          return;
        }
  
        msg.textContent = "Mensaje enviado correctamente. ¡Gracias!";
        msg.style.color = "var(--color-success)";
        form.reset();
      });
    }
  });
  