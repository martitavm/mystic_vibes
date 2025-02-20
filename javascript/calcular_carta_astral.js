// Función que calculamos para determinar el horóscopo basado en la fecha y hora de nacimiento
function calcularHoroscopo() {
    // Obtenemos los valores de la fecha y la hora de nacimiento desde el formulario
    const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    const horaNacimiento = document.getElementById("hora-nacimiento").value;

    // Definimos las fechas de inicio y fin de cada signo solar
    const signosSolares = {
        "Aries": { inicio: "03-21", fin: "04-19" },
        "Tauro": { inicio: "04-20", fin: "05-20" },
        "Géminis": { inicio: "05-21", fin: "06-20" },
        "Cáncer": { inicio: "06-21", fin: "07-22" },
        "Leo": { inicio: "07-23", fin: "08-22" },
        "Virgo": { inicio: "08-23", fin: "09-22" },
        "Libra": { inicio: "09-23", fin: "10-22" },
        "Escorpio": { inicio: "10-23", fin: "11-21" },
        "Sagitario": { inicio: "11-22", fin: "12-21" },
        "Capricornio": { inicio: "12-22", fin: "01-19" },
        "Acuario": { inicio: "01-20", fin: "02-18" },
        "Piscis": { inicio: "02-19", fin: "03-20" }
    };

    // Convertimos la fecha de nacimiento a un objeto Date para poder trabajar con ella
    const fecha = new Date(fechaNacimiento);
    const mes = fecha.getMonth() + 1; // Obtenemos el mes (recordando que es 0-indexado)
    const dia = fecha.getDate(); // Obtenemos el día

    // Inicializamos la variable para el signo solar
    let signoSolar = "";

    // Recorremos los signos solares para encontrar el correspondiente a la fecha
    for (const signo in signosSolares) {
        const { inicio, fin } = signosSolares[signo];
        const [mesInicio, diaInicio] = inicio.split('-').map(num => parseInt(num)); // Obtenemos el mes y el día de inicio del signo
        const [mesFin, diaFin] = fin.split('-').map(num => parseInt(num)); // Obtenemos el mes y el día de fin del signo

        // Comprobamos si la fecha de nacimiento está dentro del rango del signo
        if ((mes === mesInicio && dia >= diaInicio) || (mes === mesFin && dia <= diaFin)) {
            signoSolar = signo; // Asignamos el signo solar
            break; // Terminamos el bucle cuando encontramos el signo
        }
    }

    // Definimos los signos lunares, que se eligen aleatoriamente
    const signosLunares = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
    // Elegimos aleatoriamente un signo lunar
    const signoLunar = signosLunares[Math.floor(Math.random() * 12)];

    // Definimos los signos ascendentes con rangos de horas
    const signosAscendentes = {
        "Aries": [6, 9],
        "Tauro": [9, 12],
        "Géminis": [12, 15],
        "Cáncer": [15, 18],
        "Leo": [18, 21],
        "Virgo": [21, 24]
    };

    // Inicializamos la variable para el signo ascendente
    let signoAscendente = "";
    // Obtenemos la hora de nacimiento y la convertimos en número
    const hora = parseInt(horaNacimiento.split(":")[0]);

    // Recorremos los signos ascendentes para encontrar el correspondiente a la hora de nacimiento
    for (const signo in signosAscendentes) {
        const [horaInicio, horaFin] = signosAscendentes[signo];
        // Comprobamos si la hora de nacimiento está dentro del rango del signo ascendente
        if (hora >= horaInicio && hora < horaFin) {
            signoAscendente = signo; // Asignamos el signo ascendente
            break; // Terminamos el bucle cuando encontramos el signo
        }
    }

    // Mostramos el resultado en el HTML
    document.getElementById("resultado").style.display = "block"; // Hacemos visible el área de resultados
    document.getElementById("resultado").innerHTML = `
        <p><strong>Horóscopo Solar (Signo del Sol):</strong> ${signoSolar}</p>
        <p><strong>Horóscopo Lunar (Signo de la Luna):</strong> ${signoLunar}</p>
        <p><strong>Horóscopo Ascendente (Rising Sign):</strong> ${signoAscendente}</p>
    `;
}
