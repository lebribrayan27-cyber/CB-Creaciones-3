
const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

if (nombre.length < 3) {
    document.getElementById("errorNombre").textContent =
        "El nombre debe tener al menos 3 caracteres.";
    return;
} else {
    document.getElementById("errorNombre").textContent = "";
}




const expresionCorreo = /^[^\s@]+@[^\s@]+\.com(\.ar)?$/i;


if (!expresionCorreo.test(correo)) {
    document.getElementById("errorCorreo").textContent =
        "Ingresá un correo electrónico válido.";
    return;
} else {
    document.getElementById("errorCorreo").textContent = "";
}


const expresionTelefono = /^[0-9]{10,15}$/;

if (!expresionTelefono.test(telefono)) {
    document.getElementById("errorTelefono").textContent =
        "Ingresá un teléfono válido de 10 a 15 números.";
    return;
} else {
    document.getElementById("errorTelefono").textContent = "";
}

if (mensaje.length < 10) {
    document.getElementById("errorMensaje").textContent =
        "La consulta debe tener al menos 10 caracteres.";
    return;
} else {
    document.getElementById("errorMensaje").textContent = "";
}

   
const resultado = document.getElementById("resultado");

resultado.innerHTML = "";

const titulo = document.createElement("h2");
titulo.textContent = "Resumen de tu consulta";

const datos = document.createElement("p");
datos.textContent = "Nombre: " + nombre +
    " | Correo: " + correo +
    " | Teléfono: " + telefono +
    " | Consulta: " + mensaje;

resultado.appendChild(titulo);
resultado.appendChild(datos);

const botonWhatsApp = document.createElement("a");

const textoWhatsApp =
    "Hola, quiero realizar una consulta en CB Creaciones 3D." +
    "\nNombre: " + nombre +
    "\nCorreo: " + correo +
    "\nTeléfono: " + telefono +
    "\nConsulta: " + mensaje;

botonWhatsApp.href =
    "https://wa.me/5492664682515?text=" +
    encodeURIComponent(textoWhatsApp);

botonWhatsApp.textContent = "Enviar consulta por WhatsApp";
botonWhatsApp.target = "_blank";
botonWhatsApp.rel = "noopener noreferrer";

resultado.appendChild(botonWhatsApp);


});
