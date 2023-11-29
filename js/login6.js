
const formularioRegister = document.querySelector(".register-formulario");
const formularioLogin = document.querySelector(".login-formulario");

const cambio = document.querySelector(".cambio");

cambio.addEventListener("click", cambioFormulario);


function cambioFormulario(){
    formularioLogin.classList.toggle("cambio-formulario");
    cambio.classList.toggle("letra-pequeña");
    formularioLogin.children.item(0).classList.toggle("letra-pequeña");
    
}

