const velocidadSpan = document.getElementById("footer-velocidad");
const posicionSpan = document.getElementById("footer-posicion");
const frecuenciaSpan = document.getElementById("footer-frecuencia");
const medioSpan = document.getElementById("footer-medio");
const titulo = document.getElementById("medio-title");

const inputVelocidad = document.getElementById("velocidad");
const inputPosicion = document.getElementById("posicion");
const inputFrecuencia = document.getElementById("frecuencia");

const simulador = document.getElementById("simulador");
const recept = document.getElementById("receptor");
const emisor = document.getElementById("emisor");
const currentMonth = new Date().getMonth();
let medioIndex = 0; // Índice para identificar el medio

const configuracionesMedios = {
    Ballena: {
        minVelocidad: 1,
        maxVelocidad: 6,
        minFrecuencia: 10,
        maxFrecuencia: 50,
        posicionX: 100,
        pocisionY: 0
    },
    Avion: {
        minVelocidad: 22,
        maxVelocidad: 250,
        minFrecuencia: 20,
        maxFrecuencia: 20000,
        posicionX: 0,
        pocisionY: 0
    },
    Ambulancia: {
        minVelocidad: 22,
        maxVelocidad: 250,
        minFrecuencia: 500,
        maxFrecuencia: 6000,
        posicionX: 100,
        pocisionY: 60
    },
    Estrella: {
        minVelocidad: 50000,
        maxVelocidad: 300000,
        minFrecuencia: 3000000000000,
        maxFrecuencia: 1000000000000000000,
        posicionX: 15,
        pocisionY: 0
    }
};


document.getElementById("medio").addEventListener("change", function () {
    const medio = this.value; // Obtiene el valor seleccionado
    medioSpan.textContent = medio;
    titulo.textContent = medio;

    switch (medio) {
        case "Aire":
            medioIndex = 0;
            configuracion = configuracionesMedios.Ambulancia;
            break;
        case "Agua":
            medioIndex = 1;
            configuracion = configuracionesMedios.Ballena;
            break;
        case "Vacio":
            medioIndex = 2;
            configuracion = configuracionesMedios.Estrella;
            break;
    }

    cambiarMedio(medioIndex);
    if (configuracion) {
        configurarInputs(configuracion);
    }

    posicionSpan.textContent = 0; // Restablecer posición
});

// Función para configurar los inputs
function configurarInputs({ minVelocidad, maxVelocidad, minFrecuencia, maxFrecuencia, posicionX, pocisionY }) {
    inputVelocidad.setAttribute("min", minVelocidad);
    inputVelocidad.setAttribute("max", maxVelocidad);
    inputVelocidad.value = minVelocidad;
    velocidadSpan.textContent = minVelocidad;
    configurarInputs2({ minVelocidad, maxVelocidad, minFrecuencia, maxFrecuencia, posicionX, pocisionY })
}

function configurarInputs2({ minFrecuencia, maxFrecuencia, posicionX, pocisionY }) {
    inputFrecuencia.setAttribute("min", minFrecuencia);
    inputFrecuencia.setAttribute("max", maxFrecuencia);
    inputFrecuencia.value = minFrecuencia;

    frecuenciaSpan.textContent = minFrecuencia;
    emisor.style.left = posicionX + '%';
    emisor.style.top = pocisionY + '%';
}

inputVelocidad.addEventListener("input", function () {
    velocidad = this.value;
    velocidadSpan.textContent = velocidad;
    if (medioIndex == 0 && velocidad > 33) {
        emisor.style.backgroundImage = `url(${emisorImages[3]})`;
        configuracion = configuracionesMedios.Avion;
        configurarInputs2(configuracion);
    } else if(medioIndex == 0 && velocidad <= 33){
        emisor.style.backgroundImage = `url(${emisorImages[0]})`;
        configuracion = configuracionesMedios.Ambulancia;
        configurarInputs2(configuracion);
    }
    
})

inputPosicion.addEventListener("input", function () {
    posicionSpan.textContent = this.value;
})

inputFrecuencia.addEventListener("input", function () {
    frecuenciaSpan.textContent = this.value;
})    

// Arrays de imágenes para cada elemento
const emisorImages = [
    "./img/aire/ambulance.png",
    "./img/agua/whale.png",
    "./img/espacio/star.png",
    "./img/aire/airplane.png"
];

const receptorImages = [
    "./img/aire/receptor.png",
    "./img/agua/buzo.png",
    "./img/espacio/astronaut.png"
];

const bgImages = [
    "./img/aire/casa.png",
    "./img/agua/ocean-bg.jpg",
    "./img/espacio/space-bg.jpg",
    "./img/aire/nieve.png"
];

// Función para seleccionar una imagen aleatoria
function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

/* // Asignar imágenes a los divs
document.getElementById("emisor").style.backgroundImage = `url(${getRandomImage(emisorImages)})`;
document.getElementById("receptor").style.backgroundImage = `url(${getRandomImage(receptorImages)})`;
 */
const receptor = document.getElementById("receptor");
const rangeInput = document.getElementById("posicion");

rangeInput.addEventListener("input", function () {
    const value = parseInt(rangeInput.value);

    // Ajustar posición en función del valor
    if (value > 0) {
        receptor.style.left = "auto";
        receptor.style.right = `${(value / 5) * 100}%`; // Calcular proporción
    } else if (value < 0) {
        receptor.style.right = "auto";
        receptor.style.left = `${Math.abs(value / 5) * 100}%`; // Calcular proporción
    } else {
        // Centro
        receptor.style.left = "50%";
        receptor.style.right = "auto";
        receptor.style.transform = "translateX(-50%)";
    }
});

cambiarMedio(0);
configuracion = configuracionesMedios.Ambulancia;
configurarInputs(configuracion);

function cambiarMedio(medio) {
    const isDecember = currentMonth === 11; // Verifica si es diciembre
    simulador.style.backgroundImage = `url(${medio === 0 ? (isDecember ? bgImages[3] : bgImages[0]) : bgImages[medio]})`;
    recept.style.backgroundImage = `url(${receptorImages[medio]})`;
    emisor.style.backgroundImage = `url(${emisorImages[medio]})`;
}
