const velocidadSpan = document.getElementById("footer-velocidad");
const posicionSpan = document.getElementById("footer-posicion");
const frecuenciaSpan = document.getElementById("footer-frecuencia");
const medioSpan = document.getElementById("footer-medio");

const inputVelocidad = document.getElementById("velocidad");
const inputPosicion = document.getElementById("posicion");
const inputFrecuencia = document.getElementById("frecuencia");

const minVelocidadBallena = 1;
const maxVelocidadBallena = 6;
const minFreqBallena = 10;
const maxFreqBallena = 50;

const minVelocidadAvion = 70;
const maxVelocidadAvion = 250;
const minFreqAvion = 20;
const maxFreqAvion = 20000;

const minVelocidadAmbulancia = 22;
const maxVelocidadAmbulancia = 33;
const minFreqAmbulancia = 500;
const maxFreqAmbulancia = 6000;


document.getElementById("medio").addEventListener("change", function () {
    medioSpan.textContent = this.value;
    console.log(this.value);

    switch (this.value) {
        case "Aire":
            inputVelocidad.setAttribute("max", maxVelocidadAvion);
            inputVelocidad.setAttribute("min", minVelocidadAvion);
            inputFrecuencia.setAttribute("max", maxFreqAvion);
            inputFrecuencia.setAttribute("min", minFreqAvion);
            inputVelocidad.value = minVelocidadAvion;
            inputFrecuencia.value = minFreqAvion;
            velocidadSpan.textContent = minVelocidadAvion;
            frecuenciaSpan.textContent = minFreqAvion;

            break;
        case "Agua":
            inputVelocidad.setAttribute("max", maxVelocidadBallena);
            inputVelocidad.setAttribute("min", minVelocidadBallena);
            inputFrecuencia.setAttribute("max", maxFreqBallena);
            inputFrecuencia.setAttribute("min", minFreqBallena);
            inputVelocidad.value = minVelocidadBallena;
            inputFrecuencia.value = minFreqBallena;
            velocidadSpan.textContent = minVelocidadBallena;
            frecuenciaSpan.textContent = minFreqBallena;
            break;
        case "Vacio":
            inputVelocidad.setAttribute("max", maxVelocidadAmbulancia);
            inputVelocidad.setAttribute("min", minVelocidadAmbulancia);
            inputFrecuencia.setAttribute("max", maxFreqAmbulancia);
            inputFrecuencia.setAttribute("min", minFreqAmbulancia);
            inputVelocidad.value = minVelocidadAmbulancia;
            inputFrecuencia.value = minFreqAmbulancia;
            velocidadSpan.textContent = minVelocidadAmbulancia;
            frecuenciaSpan.textContent = minFreqAmbulancia;
            break;
    }

    document.getElementById("medio").addEventListener("change", function () {
    medioSpan.textContent = this.value;
    console.log(this.value);

    switch (this.value) {
        case "Aire":
            inputVelocidad.setAttribute("max", maxVelocidadAvion);
            inputVelocidad.setAttribute("min", minVelocidadAvion);
            inputFrecuencia.setAttribute("max", maxFreqAvion);
            inputFrecuencia.setAttribute("min", minFreqAvion);
            velocidadSpan.textContent = minVelocidadAvion;
            frecuenciaSpan.textContent = minFreqAvion;
            break;
        case "Agua":
            inputVelocidad.setAttribute("max", maxVelocidadBallena);
            inputVelocidad.setAttribute("min", minVelocidadBallena);
            inputFrecuencia.setAttribute("max", maxFreqBallena);
            inputFrecuencia.setAttribute("min", minFreqBallena);
            velocidadSpan.textContent = minVelocidadBallena;
            frecuenciaSpan.textContent = minFreqBallena;
            break;
        case "Vacio":
            inputVelocidad.setAttribute("max", maxVelocidadAmbulancia);
            inputVelocidad.setAttribute("min", minVelocidadAmbulancia);
            inputFrecuencia.setAttribute("max", maxFreqAmbulancia);
            inputFrecuencia.setAttribute("min", minFreqAmbulancia);
            velocidadSpan.textContent = minVelocidadAmbulancia;
            frecuenciaSpan.textContent = minFreqAmbulancia;
            break;
    }

    posicionSpan.textContent = 0;
})

})


inputVelocidad.addEventListener("input", function () {
    velocidadSpan.textContent = this.value;
})

inputPosicion.addEventListener("input", function () {
    posicionSpan.textContent = this.value;
})

inputFrecuencia.addEventListener("input", function () {
    frecuenciaSpan.textContent = this.value;
})    

// Arrays de imágenes para cada elemento
const emisorImages = [
    "./img/agua/whale.png",
    "./img/agua/whale.png",
    "./img/agua/whale.png"
];

const receptorImages = [
    "./img/agua/buzo.png",
    "./img/agua/buzo.png",
    "./img/agua/buzo.png"
];

// Función para seleccionar una imagen aleatoria
function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Asignar imágenes a los divs
document.getElementById("emisor").style.backgroundImage = `url(${getRandomImage(emisorImages)})`;
document.getElementById("receptor").style.backgroundImage = `url(${getRandomImage(receptorImages)})`;

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

