const botonLoginCambio = document.querySelector(".boton-login");
const botonRegisterCambio = document.querySelector(".boton-register");

const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const inputContraseña = document.querySelector(".input-contraseña");

const labelName = document.querySelector(".label-name");
const labelEmail = document.querySelector(".label-email");
const labelContraseña = document.querySelector(".label-contraseña");




botonLoginCambio.addEventListener("click", cambiarBotonLogin);
botonRegisterCambio.addEventListener("click", cambiarBotonRegister);

inputName.addEventListener("focus", activarTransicion);
inputEmail.addEventListener("focus", activarTransicion);
inputContraseña.addEventListener("focus", activarTransicion);
inputName.addEventListener("blur", desactivarTransicion);
inputEmail.addEventListener("blur", desactivarTransicion);
inputContraseña.addEventListener("blur", desactivarTransicion);


function cambiarBotonLogin(){
    botonLoginCambio.classList.add("boton-active");
    botonRegisterCambio.classList.remove("boton-active");
}

function cambiarBotonRegister(){
    botonRegisterCambio.classList.add("boton-active");
    botonLoginCambio.classList.remove("boton-active");
}

function activarTransicion(){
    if(document.activeElement === inputName){
        labelName.classList.add("transition");
    }
    if(document.activeElement === inputEmail){
        labelEmail.classList.add("transition");
    }
    if(document.activeElement === inputContraseña){
        labelContraseña.classList.add("transition");
    }
}
function desactivarTransicion(){
    if(inputName.value.trim() == ""){
        labelName.classList.remove("transition");
    }

    if(inputEmail.value.trim() == ""){
        labelEmail.classList.remove("transition");
    }

    if(inputContraseña.value.trim() == ""){
        labelContraseña.classList.remove("transition");
    }

      
}

