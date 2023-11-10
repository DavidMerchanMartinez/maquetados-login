const botonLoginCambio = document.querySelector(".boton-login");
const botonRegisterCambio = document.querySelector(".boton-register");

const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const inputContraseña = document.querySelector(".input-contraseña");
const inputNameRegister = document.querySelector(".input-name-register");
const inputEmailRegister = document.querySelector(".input-email-register");

const labelName = document.querySelector(".label-name");
const labelEmail = document.querySelector(".label-email");
const labelContraseña = document.querySelector(".label-contraseña");
const labelEmailRegister = document.querySelector(".label-email-register");
const labelNameRegister = document.querySelector(".label-name-register");

const formularioLogin = document.querySelector(".formulario-login");
const formularioRegister = document.querySelector(".formulario-register");




botonLoginCambio.addEventListener("click", cambiarBotonLogin);
botonRegisterCambio.addEventListener("click", cambiarBotonRegister);

inputName.addEventListener("focus", activarTransicion);
inputEmail.addEventListener("focus", activarTransicion);
inputContraseña.addEventListener("focus", activarTransicion);
inputEmailRegister.addEventListener("focus", activarTransicion);
inputNameRegister.addEventListener("focus", activarTransicion);

inputName.addEventListener("blur", desactivarTransicion);
inputEmail.addEventListener("blur", desactivarTransicion);
inputContraseña.addEventListener("blur", desactivarTransicion);
inputNameRegister.addEventListener("blur", desactivarTransicion);
inputEmailRegister.addEventListener("blur", desactivarTransicion);


function cambiarBotonLogin(){
    botonLoginCambio.classList.add("boton-active");
    botonRegisterCambio.classList.remove("boton-active");
    formularioRegister.classList.add("posicion"); 
    formularioRegister.classList.remove("inposicion"); 
    formularioLogin.classList.add("inposicion");
}

function cambiarBotonRegister(){
    botonRegisterCambio.classList.add("boton-active");
    botonLoginCambio.classList.remove("boton-active");
    formularioLogin.classList.add("posicion"); 
    formularioLogin.classList.remove("inposicion"); 
    formularioRegister.classList.add("inposicion");
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
    if(document.activeElement === inputNameRegister){
        labelNameRegister.classList.add("transition");
    }
    if(document.activeElement === inputEmailRegister){
        labelEmailRegister.classList.add("transition");
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
    if(inputNameRegister.value.trim()==""){
        labelNameRegister.classList.remove("transition");
    }
    if(inputEmailRegister.value.trim()==""){
        labelEmailRegister.classList.remove("transition");
    }

      
}

