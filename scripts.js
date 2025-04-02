document.addEventListener("DOMContentLoaded", () => {
  const totalFrames = 9;
  let currentFrame = 1;

  const interval = setInterval(() => {
    if (currentFrame <= totalFrames) {
      document.querySelectorAll(".blatt-frame").forEach((el, index) => {
        el.style.opacity = (index + 1 === currentFrame) ? 1 : 0;
      });
      currentFrame++;
    } else {
      clearInterval(interval);
    }
  }, 180); // ca. 1.6 Sekunden
});