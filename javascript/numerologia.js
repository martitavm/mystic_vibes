document.addEventListener("DOMContentLoaded", function () {
    // Cuando se pulsa el botón de comprobar se ejecuta la función calcular numero
    document.getElementById("btn_comprobar").addEventListener("click", calcular_numero);
});

const numeros_maestros = [11, 22, 33];

// Descripciones según el número que le haya tocado
const descripciones = {
    0: "Te crees un listillo comprobando si esto iba a fallar ¿No? <br> Seleccione una fecha, anda",
    1: "El número 1 simboliza la independencia, la ambición y la capacidad de liderazgo. Eres una persona con gran determinación y voluntad.",
    2: "El número 2 representa la armonía, la cooperación y la sensibilidad. Eres alguien que valora las relaciones y la paz.",
    3: "El número 3 está asociado con la creatividad, la comunicación y la alegría. Eres extrovertido y tienes un gran sentido del humor.",
    4: "El número 4 refleja estabilidad, organización y determinación. Eres práctico y confiable, buscando siempre la seguridad y la estructura.",
    5: "El número 5 es el número de la libertad, la aventura y la adaptabilidad. Te encanta explorar nuevos caminos y probar cosas nuevas.",
    6: "El número 6 simboliza la responsabilidad, el cuidado y la familia. Eres protector y te preocupas profundamente por los demás.",
    7: "El número 7 es el número de la introspección y la espiritualidad. Eres una persona profunda y pensativa, buscando siempre el conocimiento.",
    8: "El número 8 está relacionado con el poder, la ambición y el éxito material. Eres una persona enfocada en los logros y en alcanzar tus metas.",
    9: "El número 9 representa la generosidad, la compasión y el humanitarismo. Eres una persona idealista y siempre dispuesta a ayudar a los demás.",
    11: "El número 11 es un número maestro que simboliza la inspiración, la intuición y el crecimiento espiritual. Eres un líder nato con una gran conexión con tu ser interior.",
    22: "El número 22 es un número maestro, asociado con el poder de la creación y la manifestación. Tienes una gran capacidad para realizar grandes sueños y alcanzar metas ambiciosas.",
    33: "El número 33 es el número maestro del amor y la compasión. Eres una persona altruista que busca ayudar a los demás y hacer el bien en el mundo."
};

function calcular_numero() {
    let resultadoDiv = document.getElementById("resultado");
    let fecha_num = obtener_num_fecha();
    let suma = sumar_numeros(fecha_num);

    
    while (suma >= 10) {
        if (numeros_maestros.includes(suma)) {
            resultadoDiv.innerHTML = `Tu número es el ${suma}<br>${descripciones[suma]}`;
            return;
        }
        suma = sumar_numeros(suma);
    }

    resultadoDiv.innerHTML = `Tu número es el ${suma}<br>${descripciones[suma]}`;
}

function obtener_num_fecha() {
    return document.getElementById("fecha").value.replaceAll("-", ""); 
}

function sumar_numeros(numeros) {
    let suma = 0;
    let numStr = String(numeros);

    for (let i = 0; i < numStr.length; i++) {
        suma += Number(numStr[i]);
    }

    return suma;
}
