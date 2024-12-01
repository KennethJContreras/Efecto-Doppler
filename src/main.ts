// Configuration Constants
const MAX_VEHICLE_SPEED = 3;

let waveFrequency = 150;
let vehicleSpeed = 1;
let espectatorPosition = window.innerWidth / 2;
let radiusIncrementSize = 3;

// Configure Control Elements
const frequencySlider = document.getElementById("frecuencia") as HTMLInputElement;
const vehicelSpeedSlider = document.getElementById("velocidad") as HTMLInputElement;

// Update Controls
function updateControls() {
  waveFrequency = 1000 / (frequencySlider.valueAsNumber / 10);
  vehicleSpeed = MAX_VEHICLE_SPEED * (vehicelSpeedSlider.valueAsNumber / 100);
}

// Waves array
let waves: SoundWave[] = [];

// Get Canvas Context
const canvas: HTMLCanvasElement = document.getElementById("sim-canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get Audio Context
// const audio_ctx: AudioContext = new window.AudioContext();

// Get Mouse Position to draw waves
// let x = 0;
// let y = 0;

// function handleMouseMove(this: Window, event: MouseEvent) {
//   x = event.clientX;
//   y = event.clientY;
// };

// // Set mouse event to update waves new position on mouse move
// onmousemove = handleMouseMove;

// Define vehicle
const vehicle = new Vehicle(
  window.innerWidth,        // X position on canvas
  window.innerHeight / 2,   // Y position on canvas
  "🚗"
);

// Insert new waves according to the frequency
function waveGenerator() {
  let wave = new SoundWave(vehicle.x, vehicle.y, "#00007f4f", 0);
  waves.push(wave);
  setTimeout(waveGenerator, waveFrequency)
}

waveGenerator();

// Main sim loop
function loop() {
  // Update input from controls
  updateControls();

  // Update vehicle position
  vehicle.update(-vehicleSpeed);

  // Update waves size and position
  waves.forEach((wave) => {
    wave.update(radiusIncrementSize)
  });
  ctx.save();

  // Clear previously drawn waves
  ctx.reset();

  vehicle.draw(ctx);
  // Draw the waves
  waves.forEach((wave) => {
    wave.draw(ctx);
  });
  ctx.restore();

  requestAnimationFrame(loop);
}

loop();