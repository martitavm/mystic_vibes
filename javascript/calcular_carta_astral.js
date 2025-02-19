function calcularHoroscopo() {
    const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    const horaNacimiento = document.getElementById("hora-nacimiento").value;

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

    const fecha = new Date(fechaNacimiento);
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    let signoSolar = "";

    for (const signo in signosSolares) {
        const { inicio, fin } = signosSolares[signo];
        const [mesInicio, diaInicio] = inicio.split('-').map(num => parseInt(num));
        const [mesFin, diaFin] = fin.split('-').map(num => parseInt(num));

        if ((mes === mesInicio && dia >= diaInicio) || (mes === mesFin && dia <= diaFin)) {
            signoSolar = signo;
            break;
        }
    }

    const signosLunares = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
    const signoLunar = signosLunares[Math.floor(Math.random() * 12)];

    const signosAscendentes = {
        "Aries": [6, 9],
        "Tauro": [9, 12],
        "Géminis": [12, 15],
        "Cáncer": [15, 18],
        "Leo": [18, 21],
        "Virgo": [21, 24]
    };

    let signoAscendente = "";
    const hora = parseInt(horaNacimiento.split(":")[0]);

    for (const signo in signosAscendentes) {
        const [horaInicio, horaFin] = signosAscendentes[signo];
        if (hora >= horaInicio && hora < horaFin) {
            signoAscendente = signo;
            break;
        }
    }

    document.getElementById("resultado").style.display = "block";
    document.getElementById("resultado").innerHTML = `
        <p><strong>Horóscopo Solar (Signo del Sol):</strong> ${signoSolar}</p>
        <p><strong>Horóscopo Lunar (Signo de la Luna):</strong> ${signoLunar}</p>
        <p><strong>Horóscopo Ascendente (Rising Sign):</strong> ${signoAscendente}</p>
    `;
}