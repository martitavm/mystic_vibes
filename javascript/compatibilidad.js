// Selecciono la pagina completa para añadirle un listener
document.addEventListener("DOMContentLoaded", function () {
    // Cuando se pulsa el botón de comprobar se ejecuta la función compatibilidad
    document.getElementById("btn_comprobar").addEventListener("click", compatibilidad);
});


function compatibilidad() {
    let signo1 = document.getElementById("signo_1").value;
    let signo2 = document.getElementById("signo_2").value;

    // Lista de compatibilidades según astrología
    const compatibilidades = {
        "aries": { "leo": 90, "sagitario": 85, "aries": 95, "libra": 75, "tauro": 40, "cancer": 30, "piscis": 50 },
        "tauro": { "virgo": 90, "capricornio": 85, "tauro": 95, "escorpio": 75, "geminis": 40, "aries": 30, "sagitario": 50 },
        "geminis": { "libra": 90, "acuario": 85, "geminis": 95, "sagitario": 75, "cancer": 40, "capricornio": 30, "tauro": 50 },
        "cancer": { "escorpio": 90, "piscis": 85, "cancer": 95, "capricornio": 75, "leo": 40, "aries": 30, "geminis": 50 },
        "leo": { "aries": 90, "sagitario": 85, "leo": 95, "acuario": 75, "escorpio": 40, "tauro": 30, "piscis": 50 },
        "virgo": { "tauro": 90, "capricornio": 85, "virgo": 95, "piscis": 75, "sagitario": 40, "geminis": 30, "leo": 50 },
        "libra": { "geminis": 90, "acuario": 85, "libra": 95, "aries": 75, "cancer": 40, "escorpio": 30, "capricornio": 50 },
        "escorpio": { "cancer": 90, "piscis": 85, "escorpio": 95, "tauro": 75, "leo": 40, "geminis": 30, "acuario": 50 },
        "sagitario": { "aries": 90, "leo": 85, "sagitario": 95, "geminis": 75, "capricornio": 40, "cancer": 30, "virgo": 50 },
        "capricornio": { "tauro": 90, "virgo": 85, "capricornio": 95, "cancer": 75, "libra": 40, "aries": 30, "sagitario": 50 },
        "acuario": { "geminis": 90, "libra": 85, "acuario": 95, "leo": 75, "escorpio": 40, "tauro": 30, "piscis": 50 },
        "piscis": { "cancer": 90, "escorpio": 85, "piscis": 95, "virgo": 75, "aries": 40, "leo": 30, "libra": 50 }
    };

    // Descripciones según la compatibilidad de los signos
    const descripciones = {
        "muy alta": "Ambos signos tienen una conexión natural y se entienden casi sin palabras. La atracción es fuerte y la relación se siente fácil y fluida.",
        "alta": "Tienen una buena química y valores en común. Si trabajan juntos en las diferencias menores, pueden construir una relación sólida.",
        "media": "Hay diferencias significativas en sus personalidades, pero con esfuerzo pueden complementarse. La comunicación será clave.",
        "baja": "Las diferencias pueden ser un reto. Para que funcione, será necesario compromiso y adaptación por ambas partes.",
        "muy baja": "La relación puede ser complicada debido a enfoques de vida muy distintos. Será difícil encontrar puntos en común sin un gran esfuerzo."
    };

    // Asigno el porcentaje de compatbilidad según los signos seleccionados
    let porcentaje = compatibilidades[signo1][signo2] || 50;

    // Compruebo en que categoria entra de compatibilidad para poner la descripción correcta
    let categoria;
    if (porcentaje >= 85) categoria = "muy alta";
    else if (porcentaje >= 70) categoria = "alta";
    else if (porcentaje >= 50) categoria = "media";
    else if (porcentaje >= 30) categoria = "baja";
    else categoria = "muy baja";

    // Muestro el resultado en un div creado para ello
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Compatibilidad entre ${capitalizar(signo1)} y ${capitalizar(signo2)}: <strong>${porcentaje}%</strong><br>${descripciones[categoria]}`;
}

// Función para poner la primera letra del signo en mayúsculas
function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
