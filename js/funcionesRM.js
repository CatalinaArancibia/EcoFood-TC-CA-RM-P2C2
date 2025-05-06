// Validar formulario de registro
function validarRegistro(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim(); // Eliminar espacios en blanco al inicio y al final
  const email = document.getElementById("email").value.trim(); // Eliminar espacios en blanco al inicio y al final
  const password = document.getElementById("password").value;
  const confirmar = document.getElementById("confirm-password").value;

  limpiarMensajes(); // Limpia mensajes anteriores

  let valido = true;

  if (nombre === "") {
    mostrarError("nombre", "El nombre es obligatorio");
    valido = false;
  }

  if (
    !email.includes("@") ||
    email.startsWith("@") ||
    email.endsWith("@") ||
    !email.includes(".") ||
    email.indexOf("@") > email.lastIndexOf(".")
  ) {
    mostrarError("email", "Debes ingresar un correo válido.");
    valido = false;
  }

  if (password === "") {
    mostrarError("password", "La contraseña es obligatoria");
    valido = false;
  }

  if (confirmar === "") {
    mostrarError("confirm-password", "Confirma tu contraseña");
    valido = false;
  } else if (password !== confirmar) {
    mostrarError("confirm-password", "Las contraseñas no coinciden");
    valido = false;
  }

  if (valido) {
    mostrarExito(
      "formRegistro",
      "¡Registro exitoso! Redirigiendo a inicio de sesión. Por favor, espere"
    );
    // Guardar datos en localStorage (simulando una base de datos)
    document.getElementById("formRegistro").reset();

    // Redirigir al inicio de sesión después de 1 segundo
    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000); // 1000 milisegundos = 1 segundo
  }
}

// Validar formulario de login
function validarLogin(event) {
  event.preventDefault();

  const email = document.getElementById("emailLogin").value.trim();
  const password = document.getElementById("passwordLogin").value;

  limpiarMensajes(); // Limpia mensajes anteriores

  let valido = true;

  if (email === "") {
    mostrarError("emailLogin", "El correo es obligatorio");
    valido = false;
  } else if (
    !email.includes("@") ||
    email.startsWith("@") ||
    email.endsWith("@") ||
    !email.includes(".") ||
    email.indexOf("@") > email.lastIndexOf(".")
  ) {
    mostrarError("emailLogin", "Debes ingresar un correo válido.");
    valido = false;
  }

  if (password === "") {
    mostrarError("passwordLogin", "La contraseña es obligatoria");
    valido = false;
  }

  if (valido) {
    mostrarExito("formLogin", "Inicio de sesión exitoso. Redirigiendo...");
    document.getElementById("formLogin").reset();

    // Redirigir al dashboard o página principal después de 1 segundo
    setTimeout(() => {
      window.location.href = "index.html"; //
    }, 1000); // 1000 milisegundos = 1 segundo
  }
}

// Mostrar mensaje de error
function mostrarError(campoId, mensaje) {
  const campo = document.getElementById(campoId);
  const mensajeError = document.createElement("small");
  mensajeError.className = "text-danger";
  mensajeError.textContent = mensaje;
  campo.parentElement.appendChild(mensajeError);
}

// Mostrar mensaje de éxito
function mostrarExito(formId, mensaje) {
  const form = document.getElementById(formId);
  const mensajeExito = document.createElement("p");
  mensajeExito.className = "text-success text-center";
  mensajeExito.textContent = mensaje;
  form.appendChild(mensajeExito);
}

// Limpiar mensajes de error y éxito
function limpiarMensajes() {
  const mensajes = document.querySelectorAll(".text-danger, .text-success");
  mensajes.forEach((mensaje) => mensaje.remove());
}
