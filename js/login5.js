//botones superiroes
const botonSupLogin = document.querySelector(".boton-login");
const botonSupRegister = document.querySelector(".boton-register");

//formularios
const formularioLogin = document.querySelector(".login");
const formularioRegister = document.querySelector(".register");

//inputs y labels
const inputs = document.querySelectorAll("input");


//eventos
botonSupLogin.addEventListener("click",cambioFormulario);
botonSupRegister.addEventListener("click",cambioFormulario);

inputs.forEach((elemento=>{
    elemento.addEventListener("focus", cambioInput);
    elemento.addEventListener("blur", reCambioInput);
}))



function cambioFormulario(){
    botonSupLogin.classList.toggle("boton-color");
    botonSupRegister.classList.toggle("boton-color");
    formularioLogin.classList.toggle("inactivo");
    formularioRegister.classList.toggle("inactivo");

}

function cambioInput(){
    clase = this.classList;
    const labelAsociado = document.querySelector(`label[for="${clase}"]`);
    labelAsociado.classList.add("cambio-label");
    console.log(labelAsociado);
}

function reCambioInput(){
    clase = this.classList;
    valor = this.value;
    const labelAsociado = document.querySelector(`label[for="${clase}"]`);
    
    if(valor == ""){
        labelAsociado.classList.remove("cambio-label");
    }

}