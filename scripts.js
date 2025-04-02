document.addEventListener("DOMContentLoaded", () => {
  const totalFrames = 9;
  let currentFrame = 1;

  const interval = setInterval(() => {
    // Alle Frames auf 0 setzen
    document.querySelectorAll(".blatt-frame").forEach(frame => {
      frame.style.opacity = "0";
    });

    // Aktuelles Frame anzeigen
    const activeFrame = document.querySelector('.frame' + currentFrame);
    if (activeFrame) {
      activeFrame.style.opacity = "1";
    }

    currentFrame++;

    // Stoppen bei letztem Frame
    if (currentFrame > totalFrames) {
      clearInterval(interval);
    }
  }, 180); // 180ms = ca. 1.6 Sek Gesamt
});