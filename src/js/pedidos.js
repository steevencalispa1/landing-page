//menu amburgusa al tener dimeciones de celular
const toggleBtn = document.querySelector('.menu-toggle')
const toggleBtnIcon = document.querySelector('.menu-toggle i')
const dropMenu = document.querySelector('#dropMenu')

toggleBtn.onclick = function(){
    dropMenu.classList.toggle('open')
}

//validacion y eliminacion de contenido de formularios
document.getElementById('enviarBtn').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('txt_mensaje').value.trim();

    if (!nombre) {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    if (!email) {
        alert("Por favor, ingresa tu correo electrónico.");
        return;
    }

    if (!mensaje) {
        alert("Por favor, escribe tu mensaje.");
        return;
    }
    
    alert("Formulario enviado correctamente");
    document.getElementById('contactForm').reset();
});

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
        }, 10000)
    }
},2000);