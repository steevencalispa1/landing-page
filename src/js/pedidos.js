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