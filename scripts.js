document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".blatt-frame");
  let currentFrame = 0;

  const interval = setInterval(() => {
    // Alle Frames ausblenden
    frames.forEach(frame => frame.style.opacity = "0");

    // Nächsten Frame einblenden
    if (frames[currentFrame]) {
      frames[currentFrame].style.opacity = "1";
    }

    currentFrame++;

    // Stoppen, wenn alle durch sind
    if (currentFrame >= frames.length) {
      clearInterval(interval);
    }
  }, 180); // 180ms pro Frame
});