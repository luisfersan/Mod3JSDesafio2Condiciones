// Obtengo la referencia a la imagen
const image = document.getElementById('toggle-image');

// Variable para controlar si el borde está activo o no
let isBorderActive = false;

// Función para manejar el clic en la imagen
function toggleBorder() {
    if (!isBorderActive) {
        // Si el borde no está activo, agregamos el borde rojo de 2px
        image.style.border = '2px solid red';
        isBorderActive = true;
    } else {
        // Si el borde está activo, quitamos el borde
        image.style.border = 'none';
        isBorderActive = false;
    }
}

// Agrego un evento de clic a la imagen que llama a la función toggleBorder
image.addEventListener('click', toggleBorder);