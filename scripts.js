document.addEventListener("DOMContentLoaded", () => {
  const totalFrames = 9;
  let currentFrame = 1;

  const interval = setInterval(() => {
    document.querySelectorAll(".blatt-frame").forEach((el, index) => {
      if (index + 1 === currentFrame) {
        el.style.opacity = 1;
        el.style.border = "2px solid red"; // Aktiv: roter Rahmen
      } else {
        el.style.opacity = 0;
        el.style.border = "none"; // Inaktiv: kein Rahmen
      }
    });

    currentFrame++;
    if (currentFrame > totalFrames) {
      clearInterval(interval);
    }
  }, 180); // ~1.6 Sekunden
});