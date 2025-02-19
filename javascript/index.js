document.addEventListener("DOMContentLoaded", function () {
    let userName = document.getElementById("userName"); // Texto que muestra "Mi cuenta" o el nombre del usuario
    let loginOption = document.getElementById("loginOption"); // Opción para iniciar sesión
    let logoutOption = document.getElementById("logoutOption"); // Opción para cerrar sesión

    // Comprobamos si hay un usuario guardado (tras iniciar sesión en login.html)
    let user = localStorage.getItem("user");

    if (user) {
        userName.textContent = user; // Mostramos el nombre del usuario
        loginOption.classList.add("d-none"); // Ocultamos "Iniciar sesión"
        logoutOption.classList.remove("d-none"); // Mostramos "Cerrar sesión"
    }

    // Evento para cerrar sesión
    logoutOption.addEventListener("click", function () {
        localStorage.removeItem("user"); // Eliminamos el usuario guardado
        userName.textContent = "Mi cuenta"; // Volvemos al texto original
        loginOption.classList.remove("d-none"); // Mostramos "Iniciar sesión"
        logoutOption.classList.add("d-none"); // Ocultamos "Cerrar sesión"
    });
});

