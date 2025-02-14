document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const alertBox = document.getElementById("alertBox");

        // Simulación de credenciales (en producción, esto se manejaría en un backend)
        const validUser = {
            email: "usuario@example.com",
            password: "123456"
        };

        if (email === validUser.email && password === validUser.password) {
            alertBox.classList.remove("d-none", "alert-danger");
            alertBox.classList.add("alert-success");
            alertBox.textContent = "Inicio de sesión exitoso. Redirigiendo...";
            
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirigir a otra página tras login exitoso
            }, 2000);
        } else {
            alertBox.classList.remove("d-none", "alert-success");
            alertBox.classList.add("alert-danger");
            alertBox.textContent = "Correo o contraseña incorrectos.";
        }
    });
});