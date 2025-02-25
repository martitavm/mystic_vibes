document.addEventListener("DOMContentLoaded", function () {
    let nombreUsuario = document.getElementById("userName"); // Nombre del usuario en el menú
    let opcionIniciarSesion = document.getElementById("loginOption"); // Opción "Iniciar sesión"
    let opcionCerrarSesion = document.getElementById("logoutOption"); // Opción "Cerrar sesión"

    // Verificar si hay un usuario guardado en localStorage
    let usuario = localStorage.getItem("usuario");

    if (usuario) {
        nombreUsuario.textContent = usuario; // Mostrar el nombre del usuario
        opcionIniciarSesion.classList.add("d-none"); // Ocultar "Iniciar sesión"
        opcionCerrarSesion.classList.remove("d-none"); // Mostrar "Cerrar sesión"
    }

    // Evento para cerrar sesión
    opcionCerrarSesion.addEventListener("click", function () {
        localStorage.removeItem("usuario"); // Eliminar usuario guardado
        nombreUsuario.textContent = "Mi cuenta"; // Restaurar el texto por defecto
        opcionIniciarSesion.classList.remove("d-none"); // Mostrar "Iniciar sesión"
        opcionCerrarSesion.classList.add("d-none"); // Ocultar "Cerrar sesión"
    });
});
