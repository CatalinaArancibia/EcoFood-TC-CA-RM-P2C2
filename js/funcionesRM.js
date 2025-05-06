// Usuario predefinido
const usuarioPredefinido = {
  nombre: "Admin",
  email: "admin@correo.com",
  password: "admin123"
};

// Guardar usuario predefinido si no existe aún
window.addEventListener("DOMContentLoaded", () => {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existe = usuarios.some((u) => u.email === usuarioPredefinido.email);
  if (!existe) {
    usuarios.push(usuarioPredefinido);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
});

// Validar formulario de registro
function validarRegistro(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmar = document.getElementById("confirm-password").value;

  limpiarMensajes();

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
    // Guardar el nuevo usuario
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si ya existe el email
    const yaExiste = usuarios.some((u) => u.email === email);
    if (yaExiste) {
      mostrarError("email", "Este correo ya está registrado");
      return;
    }

    usuarios.push({ nombre, email, password });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarExito("formRegistro", "¡Registro exitoso! Redirigiendo a inicio de sesión.");

    document.getElementById("formRegistro").reset();

    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000);
  }
}

// Validar formulario de login
function validarLogin(event) {
  event.preventDefault();

  const email = document.getElementById("emailLogin").value.trim();
  const password = document.getElementById("passwordLogin").value;

  limpiarMensajes();

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
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioValido = usuarios.find((u) => u.email === email && u.password === password);

    if (usuarioValido) {
      mostrarExito("formLogin", "Inicio de sesión exitoso. Redirigiendo...");
      document.getElementById("formLogin").reset();

      // Guardar el nombre del usuario logueado (opcional)
      localStorage.setItem("usuarioActivo", JSON.stringify(usuarioValido));

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      mostrarError("emailLogin", "Correo o contraseña incorrectos.");
    }
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
