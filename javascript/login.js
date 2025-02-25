document.addEventListener("DOMContentLoaded", function () {
    let formularioInicioSesion = document.getElementById("formularioInicioSesion");

    // Escucha el evento de envío del formulario de inicio de sesión
    formularioInicioSesion.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Evita que el formulario se envíe y recargue la página

        // Capturamos los valores ingresados en los campos de correo y contraseña
        let correo = document.getElementById("correo").value;
        let contrasena = document.getElementById("contrasena").value;
        let cajaAlerta = document.getElementById("cajaAlerta"); // Caja de alerta para mostrar mensajes

        // Simulación de credenciales válidas (en un sistema real esto vendría de una base de datos)
        let usuarioValido = {
            correo: "antonio@gmail.com",
            contrasena: "123456",
            nombre: "Antonio" // Nombre del usuario que se mostrará en la navbar
        };

        // Verificamos si el correo y la contraseña coinciden con el usuario válido
        if (correo === usuarioValido.correo && contrasena === usuarioValido.contrasena) {
            // Guardamos el nombre del usuario en localStorage para que aparezca en la navbar
            localStorage.setItem("usuario", usuarioValido.nombre);

            // Mostramos mensaje de éxito en la alerta
            cajaAlerta.classList.remove("d-none", "alert-danger");
            cajaAlerta.classList.add("alert-success");
            cajaAlerta.textContent = "Inicio de sesión exitoso. Redirigiendo...";

            // Redirigir a la página principal después de 1 segundo
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            // Si las credenciales son incorrectas, mostramos mensaje de error
            cajaAlerta.classList.remove("d-none", "alert-success");
            cajaAlerta.classList.add("alert-danger");
            cajaAlerta.textContent = "Correo o contraseña incorrectos.";
        }
    });
});
