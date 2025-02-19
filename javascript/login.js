document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");

    // Escucha el evento de envío del formulario de inicio de sesión
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página

        // Capturamos los valores ingresados en los campos de email y contraseña
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let alertBox = document.getElementById("alertBox"); // Caja de alerta para mostrar mensajes

        // Simulación de credenciales válidas (en un sistema real esto vendría de una base de datos)
        let validUser = {
            email: "antonio@gmail.com",
            password: "123456",
            name: "Antonio" // Nombre del usuario que se mostrará en la navbar
        };

        // Verificamos si el correo y la contraseña coinciden con el usuario válido
        if (email === validUser.email && password === validUser.password) {
            // Guardamos el nombre del usuario en localStorage para que aparezca en la navbar
            localStorage.setItem("user", validUser.name);

            // Mostramos mensaje de éxito en la alerta
            alertBox.classList.remove("d-none", "alert-danger");
            alertBox.classList.add("alert-success");
            alertBox.textContent = "Inicio de sesión exitoso. Redirigiendo...";

            // Redirigir a la página principal después de 1 segundo
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            // Si las credenciales son incorrectas, mostramos mensaje de error
            alertBox.classList.remove("d-none", "alert-success");
            alertBox.classList.add("alert-danger");
            alertBox.textContent = "Correo o contraseña incorrectos.";
        }
    });
});
