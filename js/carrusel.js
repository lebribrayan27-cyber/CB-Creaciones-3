
const imagenes = [
    "img/Drago.jpg",
    "img/llavero.jpg",
    "img/maceta.jpg"
];

let indiceActual = 0;

const imagenCarrusel = document.getElementById("imagenCarrusel");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

function mostrarImagen() {
    imagenCarrusel.src = imagenes[indiceActual];
}

botonSiguiente.addEventListener("click", function() {
    indiceActual++;

    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    mostrarImagen();
});

botonAnterior.addEventListener("click", function() {
    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    mostrarImagen();
});
