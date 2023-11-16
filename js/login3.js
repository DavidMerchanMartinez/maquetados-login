const contMensaje = document.querySelector(".contenedor-mensaje");
const contFormularios = document.querySelector(".formularios");
const contFormularioRegister = document.querySelector(".formulario-register");
const contFormularioLogin = document.querySelector(".formulario-login");
const mensaje = document.querySelector(".mensaje");
const mensajeCambio = document.querySelector(".mensaje-cambio");

const botonEvento = document.querySelector(".boton-evento");


botonEvento.addEventListener("click",cambioFormulario);

function cambioFormulario(){
    contFormularios.classList.toggle("formActive");
    contMensaje.classList.toggle("mensajeActive");
    contFormularioRegister.classList.toggle("inactive");
    contFormularioLogin.classList.toggle("inactive");
    mensaje.classList.toggle("mensajeBorder");
    if(botonEvento.innerHTML == "Registro"){
        botonEvento.innerHTML = "Login";
        mensajeCambio.innerHTML = "Registrate con tus datos para ser parte de esta comunidad";
    }else{
        botonEvento.innerHTML = "Registro";
        mensajeCambio.innerHTML = "ingresa con tus datos para ser acceder a la comunidad";
    }
    
}