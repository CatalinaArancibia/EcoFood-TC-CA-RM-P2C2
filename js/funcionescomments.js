// crear variable inmutable (array)
const comments = [
    { nombreUsuario: "Meowl", textoComentario: "Los productos llegaron en buen estado y el empaque es ecológico." },
    { nombreUsuario: "John Pork", textoComentario: "Excelente calidad, se nota el compromiso con la sostenibilidad." },
    { nombreUsuario: "Mohamed Amurali", textoComentario: "Muy buena iniciativa, ojalá más empresas se sumen a esto." }
];

// función para cargar los comentarios dinámicamente
// toma los datos del array y los muestra en el HTML
function cargarComentarios() {
    // querySelector porque estoy usando una clase
    const contenedor = document.querySelector(".comments-list");
    if (!contenedor) return;
    contenedor.innerHTML = "";
    // iterar sobre cada comentario en el array
    comments.forEach((comment) => {
        // crear el elemento donde irán los comentarios
        const div = document.createElement("div");
        // para agregar el css
        div.classList.add("comentario");
        div.innerHTML = `
        <h3>${comment.nombreUsuario} </h3>
        <p>${comment.textoComentario} </p>
        `;
        // se agregan los comentarios
        contenedor.appendChild(div);
    });
}

// función para recibir los comentarios
// event es el envío del formulario
function agregarComentario(event) {
    event.preventDefault(); // para manejar el envío del formulario

    const nombre = document.getElementById("nombre").value;
    const texto = document.getElementById("comentario").value;

    if (nombre && texto) {
        comments.push({
            nombreUsuario: nombre,
            textoComentario: texto
        });

        cargarComentarios();
        const form = document.querySelector(".comments-form");
        if (form) {
            form.reset();
        }
    }
}

// asegurarse de que el formulario existe antes de agregar el eventListener
const form = document.querySelector(".comments-form");
if (form) {
    form.addEventListener("submit", agregarComentario);
}

// ejecutar la carga de comentarios cuando el contenido de la página esté listo
window.addEventListener("DOMContentLoaded", cargarComentarios);