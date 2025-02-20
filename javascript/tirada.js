document.addEventListener("DOMContentLoaded", function () {
    // Listado de cartas que significan "SÍ" y "NO"
    let tarotDeckYes = ["El_Carro", "El_Sol", "La_Estrella", "La_Fuerza", "La_Muerte"];
    let tarotDeckNo = ["El_Colgado", "El_Diablo", "La_Luna", "La_Torre", "El_Mundo"];
    let tarotDeck = tarotDeckYes.concat(tarotDeckNo); // Mazo completo

    // Capturamos los elementos de la página que vamos a usar
    let btn = document.getElementById("getAnswer"); // Botón para hacer la tirada
    let card1 = document.getElementById("card1"); // Primera carta
    let card2 = document.getElementById("card2"); // Segunda carta
    let card3 = document.getElementById("card3"); // Tercera carta
    let answer = document.getElementById("answer"); // Lugar donde aparecerá la respuesta
    let questionInput = document.getElementById("question"); // Campo de texto para la pregunta

    let lastQuestion = ""; // Variable para guardar la última pregunta

    btn.addEventListener("click", function () {
        let question = questionInput.value.trim(); // Obtener la pregunta y eliminar espacios

        // Si el campo está vacío, mostramos el mensaje y detenemos la ejecución
        if (question === "") {
            alert("Introduce una pregunta");
            return;
        }

        // Si la pregunta es la misma que la última, avisamos y detenemos la ejecución
        if (question === lastQuestion) {
            alert("Por favor, cambia tu pregunta antes de realizar otra tirada.");
            return;
        }

        // Guardamos la nueva pregunta como la última que hizo el usuario
        lastQuestion = question;

        // Seleccionamos tres cartas únicas sin repetir
        let selectedCards = getUniqueCards(tarotDeck, 3);
        let [card1Name, card2Name, card3Name] = selectedCards;

        // Cambiamos las imágenes de las cartas según lo que salió
        card1.src = `../static/imagenes/tarot/${card1Name}.jpg`;
        card2.src = `../static/imagenes/tarot/${card2Name}.jpg`;
        card3.src = `../static/imagenes/tarot/${card3Name}.jpg`;

        // Hacemos que las cartas se muestren (por si estaban ocultas)
        card1.style.display = "inline";
        card2.style.display = "inline";
        card3.style.display = "inline";

        // Contamos cuántas cartas son "SÍ" y cuántas son "NO"
        let yesCount = selectedCards.filter(card => tarotDeckYes.includes(card)).length;
        let noCount = selectedCards.filter(card => tarotDeckNo.includes(card)).length;

        // Determinamos la respuesta final
        if (yesCount > noCount) {
            answer.textContent = "La respuesta es: SÍ";
        } else if (noCount > yesCount) {
            answer.textContent = "La respuesta es: NO";
        } else {
            answer.textContent = "La respuesta es: Incierta";
        }
    });

    // Función para obtener un número determinado de cartas únicas
    function getUniqueCards(deck, count) {
        let shuffled = deck.sort(() => 0.5 - Math.random()); // Barajamos las cartas
        return shuffled.slice(0, count); // Tomamos las primeras 'count' cartas sin repetir
    }

    // Cuando la página se recarga, limpiamos la pregunta y la última pregunta guardada
    window.onload = function () {
        questionInput.value = '';  // Borramos el campo de la pregunta
        lastQuestion = ''; // También borramos la pregunta guardada
    }
});
