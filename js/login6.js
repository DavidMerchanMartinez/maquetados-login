
const formularioRegister = document.querySelector(".register-formulario");
const formularioLogin = document.querySelector(".login-formulario");

const cambio = document.querySelector(".cambio-register");
const cambio2 = document.querySelector(".cambio-login");

cambio.addEventListener("click", cambioFormulario);
cambio2.addEventListener("click", cambioFormulario);


function cambioFormulario(event){
    if(event.target.classList.item(1)  == "letra-pequeña"){
        formularioLogin.classList.toggle("cambio-formulario");
        formularioLogin.children.item(0).classList.toggle("letra-pequeña");
        formularioRegister.children.item(0).classList.toggle("letra-pequeña");
    } 
}

