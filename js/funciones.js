function redirigirRegistro() {
    window.location.href = "registro.html";
  }
  
  function redirigirLogin() {
    window.location.href = "login.html";
  }
  
  // Frases motivadoras
  const frases = [
    "¡Cada acción cuenta para un mundo sin desperdicio!",
    "Juntos podemos cambiar el futuro alimentario.",
    "Aprovecha cada alimento, respeta cada recurso.",
    "Reducir el desperdicio empieza contigo."
  ];
  
  // Mostrar frase aleatoria + abrir modal
  window.addEventListener('DOMContentLoaded', () => {
    const bienvenidaModal = new bootstrap.Modal(document.getElementById('bienvenidaModal'));
    bienvenidaModal.show();
  
    const fraseElemento = document.getElementById('fraseMotivadora');
    if (fraseElemento) {
      const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
      fraseElemento.textContent = fraseAleatoria;
    }
  });
  
  