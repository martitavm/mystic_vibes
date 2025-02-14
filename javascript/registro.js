document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const alertBox = document.getElementById("alertBox");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Capturar valores de los inputs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Validaciones básicas
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            showAlert("Todos los campos son obligatorios", "danger");
            return;
        }

        if (!validateEmail(email)) {
            showAlert("Ingresa un correo válido", "danger");
            return;
        }

        if (password.length < 6) {
            showAlert("La contraseña debe tener al menos 6 caracteres", "danger");
            return;
        }

        if (password !== confirmPassword) {
            showAlert("Las contraseñas no coinciden", "danger");
            return;
        }

        // Simulación de registro exitoso (en un proyecto real, aquí iría una petición a un servidor)
        showAlert("Registro exitoso. Ahora puedes iniciar sesión.", "success");

        // Limpiar formulario después de unos segundos
        setTimeout(() => {
            registerForm.reset();
            alertBox.style.display = "none";
        }, 3000);
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // Función para mostrar alertas
    function showAlert(message, type) {
        alertBox.style.display = "block";
        alertBox.className = `alert alert-${type}`;
        alertBox.textContent = message;
    }
});
