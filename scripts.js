document.addEventListener("DOMContentLoaded", () => {
  console.log("scripts.js wurde geladen");

  const totalFrames = 9;
  let currentFrame = 1;

  const frames = [];

  for (let i = 1; i <= totalFrames; i++) {
    const frame = document.querySelector(`.frame${i}`);
    if (frame) {
      frames.push(frame);
      frame.style.border = "2px solid green"; // sichtbar markieren
    } else {
      console.warn(`Bild frame${i} nicht gefunden`);
    }
  }

  if (frames.length === 0) {
    console.error("Keine Frames gefunden – Animation abgebrochen");
    return;
  }

  console.log("Starte Animation mit", frames.length, "Frames");

  const interval = setInterval(() => {
    if (currentFrame > 1 && frames[currentFrame - 2]) {
      frames[currentFrame - 2].style.opacity = 0;
    }

    if (currentFrame <= frames.length) {
      frames[currentFrame - 1].style.opacity = 1;
      currentFrame++;
    } else {
      clearInterval(interval);
      console.log("Animation abgeschlossen");
    }
  }, 180);
});