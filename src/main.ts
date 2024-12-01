
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
let x = 0;
let y = 0;

function handleMouseMove(this: Window, event: MouseEvent) {
  x = event.clientX;
  y = event.clientY;
};

// Set mouse event to update waves new position on mouse move
onmousemove = handleMouseMove;

// Insert new wave every 0.5s
setInterval(() => {
  let wave = new SoundWave(x, y, "blue", 0);
  waves.push(wave); 
}, 200);


// Main sim loop
function loop() {
  
  // Update waves size and position
  waves.forEach((wave) => {
    wave.update()
  });
  ctx.save();

  // Clear previously drawn waves
  ctx.reset();

  // Draw the waves
  waves.forEach((wave) => {
    wave.draw(ctx);
  });
  ctx.restore();

  requestAnimationFrame(loop);
}

loop();