// ventana de imagenes
let currentImageIndex = 0;
const images = document.querySelectorAll('.container_hijo img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal_img');

function openModal(index) {
    currentImageIndex = index;
    modal.style.display = 'block';
    modalImg.src = images[currentImageIndex].src;
}

function closeModal() {
    modal.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;

    if(currentImageIndex < 0) currentImageIndex = images.length -1;
    if(currentImageIndex >= images.length) currentImageIndex = 0;

    modalImg.src = images[currentImageIndex].src;
}

// abrir imagen en pantalla completa
function openFullScreen() {
    if(modalImg.requestFullscreen) {
        modalImg.requestFullscreen();
    } else if (modalImg.mozRequestFullScreen) {
        modalImg.mozRequestFullScreen();
    } else if (modalImg.webkitRequestFullScreen) {
        modalImg.webkitRequestFullScreen();
    } else if (modalImg.msRequestFullScreen) {
        modalImg.msRequestFullScreen();
    }
}

// Muentra mensaje cada 2 segundos
// variable control msj
let mensaje_visible = false;

setInterval(function() {
    const ayuda = document.getElementById('ayuda');
    
    // sentencia para mostrar el msj si no es visible
    if(!mensaje_visible) {
        ayuda.style.display = 'block';
        mensaje_visible = true;
        // ayuda a ocultar el msj
        setTimeout(function() {
            ayuda.style.display = 'none';
            mensaje_visible = false
        }, 5000)
    }
},2000);