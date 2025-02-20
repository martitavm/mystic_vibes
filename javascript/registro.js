document.addEventListener("DOMContentLoaded", function () {
    // Capturamos el formulario de registro y la caja de alertas
    let registerForm = document.getElementById("registerForm");
    let alertBox = document.getElementById("alertBox");

    // Agregamos un evento al formulario cuando se envía
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario

        // Capturamos los valores ingresados por el usuario en los campos del formulario
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Validaciones básicas del formulario
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            showAlert("Todos los campos son obligatorios", "danger");
            return; // Salimos de la función si algún campo está vacío
        }

        // Validación del formato del correo electrónico
        if (!validateEmail(email)) {
            showAlert("Ingresa un correo válido", "danger");
            return;
        }

        // Validación de la longitud mínima de la contraseña
        if (password.length < 6) {
            showAlert("La contraseña debe tener al menos 6 caracteres", "danger");
            return;
        }

        // Verificamos si las contraseñas coinciden
        if (password !== confirmPassword) {
            showAlert("Las contraseñas no coinciden", "danger");
            return;
        }

        // Simulación de un registro exitoso (en un caso real, aquí se enviaría la información al servidor)
        showAlert("Registro exitoso. Ahora puedes iniciar sesión.", "success");

        // Limpiamos el formulario después de 3 segundos y ocultamos la alerta
        setTimeout(() => {
            registerForm.reset(); // Borra los campos del formulario
            alertBox.style.display = "none"; // Oculta la caja de alertas
        }, 3000);
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expresión regular para validar emails
        return re.test(email); // Retorna true si el email es válido, false si no
    }

    // Función para mostrar alertas en la interfaz
    function showAlert(message, type) {
        alertBox.style.display = "block"; // Hace visible la caja de alertas
        alertBox.className = `alert alert-${type}`; // Agrega una clase CSS para definir el tipo de alerta (success o danger)
        alertBox.textContent = message; // Muestra el mensaje de la alerta
    }
});
