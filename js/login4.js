const formularioLogin = document.querySelector(".login");
const formularioRegister = document.querySelector(".register");
// cambio formulario
const aLogin = document.querySelector(".a-login");
const aRegister = document.querySelector(".a-register");
// cambio label del input
const inputs =document.querySelectorAll("input");
const labels =document.querySelectorAll("label");

// eventos de cambio register-login
aLogin.addEventListener("click", cambioRegister);
aRegister.addEventListener("click", cambioLogin);

// eventos input
inputs.forEach(function(input) {
    input.addEventListener("focus", cambioInput);
    input.addEventListener("blur", reCambioInput);
});


// funciones 
function cambioRegister(){
    formularioLogin.classList.add("inactivo");
    formularioRegister.classList.remove("inactivo");
}

function cambioLogin(){
    formularioLogin.classList.remove("inactivo");
    formularioRegister.classList.add("inactivo");
}

function cambioInput(){
    const classList = this.classList;
    const labelAsociado = document.querySelector(`label[for="${classList}"]`);
    labelAsociado.classList.add("formulario-activo");
     
}
function reCambioInput(){
    const classList = this.classList;
    const valor = this.value.trim();
    const labelAsociado = document.querySelector(`label[for="${classList}"]`);
    if(valor!=""){
        labelAsociado.classList.add("formulario-activo");
    }else{
        labelAsociado.classList.remove("formulario-activo");
    }
     
}
