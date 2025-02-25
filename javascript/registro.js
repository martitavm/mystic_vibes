document.addEventListener("DOMContentLoaded", function () {
    // Capturamos el formulario de registro y la caja de alertas
    let formularioRegistro = document.getElementById("formularioRegistro");
    let cajaAlerta = document.getElementById("cajaAlerta");

    // Agregamos un evento al formulario cuando se envía
    formularioRegistro.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Evita que la página se recargue al enviar el formulario

        // Capturamos los valores ingresados por el usuario en los campos del formulario
        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let contrasena = document.getElementById("contrasena").value.trim();
        let confirmarContrasena = document.getElementById("confirmarContrasena").value.trim();

        // Validaciones básicas del formulario
        if (nombre === "" || correo === "" || contrasena === "" || confirmarContrasena === "") {
            mostrarAlerta("Todos los campos son obligatorios", "danger");
            return; // Salimos de la función si algún campo está vacío
        }

        // Validación del formato del correo electrónico
        if (!validarCorreo(correo)) {
            mostrarAlerta("Ingresa un correo válido", "danger");
            return;
        }

        // Validación de la longitud mínima de la contraseña
        if (contrasena.length < 6) {
            mostrarAlerta("La contraseña debe tener al menos 6 caracteres", "danger");
            return;
        }

        // Verificamos si las contraseñas coinciden
        if (contrasena !== confirmarContrasena) {
            mostrarAlerta("Las contraseñas no coinciden", "danger");
            return;
        }

        // Simulación de un registro exitoso
        mostrarAlerta("Registro exitoso. Ahora puedes iniciar sesión.", "success");

        // Limpiamos el formulario después de 3 segundos y ocultamos la alerta
        setTimeout(() => {
            formularioRegistro.reset(); // Borra los campos del formulario
            cajaAlerta.style.display = "none"; // Oculta la caja de alertas
        }, 3000);
    });

    // Función para validar el formato del correo electrónico
    function validarCorreo(correo) {
        let expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expresión regular para validar emails
        return expresion.test(correo); // Retorna true si el correo es válido, false si no
    }

    // Función para mostrar alertas en la interfaz
    function mostrarAlerta(mensaje, tipo) {
        cajaAlerta.style.display = "block"; // Hace visible la caja de alertas
        cajaAlerta.className = `alert alert-${tipo}`; // Agrega una clase CSS para definir el tipo de alerta (success o danger)
        cajaAlerta.textContent = mensaje; // Muestra el mensaje de la alerta
    }
});
