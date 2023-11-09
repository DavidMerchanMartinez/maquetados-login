
const contPrincipal = document.querySelector(".contenedor-principal");

const boton = document.querySelector(".boton-login");
const cerrar =  document.querySelector(".contenedor-boton-cerrar");


contenedorFormularioRegistro = document.querySelector(".contenedor-formulario-registro");
contenedorFormularioLogin = document.querySelector(".contenedor-formulario-login");

const apartadoRegister = document.querySelector(".apartado-register");
const apartadoLogin = document.querySelector(".apartado-login")

boton.addEventListener('click', abrirContenedorPrincipal);
cerrar.addEventListener('click', cerrarContenedorPrincipal);

apartadoRegister.addEventListener('click', onFormularioLogin);
apartadoLogin.addEventListener('click',onFormularioRegistro);



        // funciones para cerrar y abrir formulario 

        function cerrarContenedorPrincipal(){
            contPrincipal.style.display = "none";
        }

        function abrirContenedorPrincipal(){
            contPrincipal.style.display = "flex";
        }

        //funciones para cambiar de formulario

        function onFormularioLogin(){
            contenedorFormularioLogin.classList.add("active");
            contenedorFormularioLogin.classList.remove("inactive");
            contenedorFormularioRegistro.classList.add("inactive")
            contenedorFormularioRegistro.classList.remove("active")

        }

        function onFormularioRegistro(){
            contenedorFormularioRegistro.classList.add("active");
            contenedorFormularioRegistro.classList.remove("inactive");
            contenedorFormularioLogin.classList.add("inactive");
            contenedorFormularioLogin.classList.remove("active");

           
            
        }


