document.addEventListener("DOMContentLoaded", function () {
    // Listado de cartas que significan "SÍ" y "NO"
    let mazoTarotSi = ["El_Carro", "El_Sol", "La_Estrella", "La_Fuerza", "La_Muerte"];
    let mazoTarotNo = ["El_Colgado", "El_Diablo", "La_Luna", "La_Torre", "El_Mundo"];
    let mazoTarot = mazoTarotSi.concat(mazoTarotNo); // Mazo completo

    // Capturamos los elementos de la página que vamos a usar
    let botonTirada = document.getElementById("obtenerRespuesta"); // Botón para hacer la tirada
    let carta1 = document.getElementById("carta1"); // Primera carta
    let carta2 = document.getElementById("carta2"); // Segunda carta
    let carta3 = document.getElementById("carta3"); // Tercera carta
    let respuesta = document.getElementById("respuesta"); // Lugar donde aparecerá la respuesta
    let entradaPregunta = document.getElementById("pregunta"); // Campo de texto para la pregunta

    let ultimaPregunta = ""; // Variable para guardar la última pregunta

    botonTirada.addEventListener("click", function () {
        let pregunta = entradaPregunta.value.trim(); // Obtener la pregunta y eliminar espacios

        // Si el campo está vacío, mostramos el mensaje y detenemos la ejecución
        if (pregunta === "") {
            alert("Introduce una pregunta");
            return;
        }

        // Si la pregunta es la misma que la última, avisamos y detenemos la ejecución
        if (pregunta === ultimaPregunta) {
            alert("Por favor, cambia tu pregunta antes de realizar otra tirada.");
            return;
        }

        // Guardamos la nueva pregunta como la última que hizo el usuario
        ultimaPregunta = pregunta;

        // Seleccionamos tres cartas únicas sin repetir
        let cartasSeleccionadas = obtenerCartasUnicas(mazoTarot, 3);
        let [carta1Nombre, carta2Nombre, carta3Nombre] = cartasSeleccionadas;

        // Cambiamos las imágenes de las cartas según lo que salió
        carta1.src = `../static/imagenes/tarot/${carta1Nombre}.jpg`;
        carta2.src = `../static/imagenes/tarot/${carta2Nombre}.jpg`;
        carta3.src = `../static/imagenes/tarot/${carta3Nombre}.jpg`;

        // Hacemos que las cartas se muestren (por si estaban ocultas)
        carta1.style.display = "inline";
        carta2.style.display = "inline";
        carta3.style.display = "inline";

        // Contamos cuántas cartas son "SÍ" y cuántas son "NO"
        let contadorSi = cartasSeleccionadas.filter(carta => mazoTarotSi.includes(carta)).length;
        let contadorNo = cartasSeleccionadas.filter(carta => mazoTarotNo.includes(carta)).length;

        // Determinamos la respuesta final
        if (contadorSi > contadorNo) {
            respuesta.textContent = "La respuesta es: SÍ";
        } else if (contadorNo > contadorSi) {
            respuesta.textContent = "La respuesta es: NO";
        } else {
            respuesta.textContent = "La respuesta es: Incierta";
        }
    });

    // Función para obtener un número determinado de cartas únicas
    function obtenerCartasUnicas(mazo, cantidad) {
        let barajado = mazo.sort(() => 0.5 - Math.random()); // Barajamos las cartas
        return barajado.slice(0, cantidad); // Tomamos las primeras 'cantidad' cartas sin repetir
    }

    // Cuando la página se recarga, limpiamos la pregunta y la última pregunta guardada
    window.onload = function () {
        entradaPregunta.value = '';  // Borramos el campo de la pregunta
        ultimaPregunta = ''; // También borramos la pregunta guardada
    }
});
