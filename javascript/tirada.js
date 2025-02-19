document.addEventListener("DOMContentLoaded", function () {
    // Listado de cartas que significan "SÍ" y "NO"
    let tarotDeckYes = ["El_Carro", "El_Sol", "La_Estrella", "La_Fuerza", "La_Muerte"];
    let tarotDeckNo = ["El_Colgado", "El_Diablo", "La_Luna", "La_Torre", "El_Mundo"];

    // Capturamos los elementos de la página que vamos a usar
    let btn = document.getElementById("getAnswer"); // Botón para hacer la tirada
    let card1 = document.getElementById("card1"); // Primera carta
    let card2 = document.getElementById("card2"); // Segunda carta
    let card3 = document.getElementById("card3"); // Tercera carta
    let answer = document.getElementById("answer"); // Lugar donde aparecerá la respuesta
    let questionInput = document.getElementById("question"); // El campo donde el usuario escribe su pregunta

    let lastQuestion = ""; // Aquí vamos a guardar la última pregunta para compararla después

    btn.addEventListener("click", function () {
        // Si la pregunta está vacía o es la misma que la última vez, avisamos al usuario y salimos
        if (questionInput.value.trim() === "" || questionInput.value.trim() === lastQuestion) {
            alert("Por favor, cambia tu pregunta antes de realizar otra tirada.");
            return; // No seguimos con el código, evitamos que se haga la tirada
        }

        // Guardamos la nueva pregunta como la última que hizo el usuario
        lastQuestion = questionInput.value.trim();

        // Elegimos tres cartas al azar del mazo
        let card1Name = randomCard(tarotDeckYes.concat(tarotDeckNo));
        let card2Name = randomCard(tarotDeckYes.concat(tarotDeckNo));
        let card3Name = randomCard(tarotDeckYes.concat(tarotDeckNo));

        // Cambiamos la imagen de las cartas según lo que salió
        card1.src = `../static/imagenes/tarot/${card1Name}.jpg`;
        card2.src = `../static/imagenes/tarot/${card2Name}.jpg`;
        card3.src = `../static/imagenes/tarot/${card3Name}.jpg`;

        // Hacemos que las cartas se muestren (por si estaban ocultas)
        card1.style.display = "inline";
        card2.style.display = "inline";
        card3.style.display = "inline";

        // Contamos cuántas cartas son "SÍ" y cuántas son "NO"
        let yesCount = [card1Name, card2Name, card3Name].filter(card => tarotDeckYes.includes(card)).length;
        let noCount = [card1Name, card2Name, card3Name].filter(card => tarotDeckNo.includes(card)).length;

        // Dependiendo de cuántas cartas salieron de cada tipo, damos la respuesta
        if (yesCount > noCount) {
            answer.textContent = "La respuesta es: SÍ";
        } else if (noCount > yesCount) {
            answer.textContent = "La respuesta es: NO";
        } else {
            answer.textContent = "La respuesta es: Incierta";
        }
    });

    // Función para elegir una carta aleatoria
    function randomCard(deck) {
        return deck[Math.floor(Math.random() * deck.length)];
    }

    // Cuando la página se recarga, limpiamos la pregunta y la última pregunta guardada
    window.onload = function () {
        questionInput.value = '';  // Borramos el campo de la pregunta
        lastQuestion = ''; // También borramos la pregunta guardada
    }
});





