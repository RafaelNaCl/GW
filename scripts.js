document.addEventListener("DOMContentLoaded", function () {
    console.log("Ginkoblatt-Animation gestartet");
  
    const totalFrames = 9;
    let currentFrame = 1;
  
    const interval = setInterval(() => {
      if (currentFrame > 1) {
        document.querySelector(`.frame${currentFrame - 1}`).style.opacity = 0;
      }
  
      if (currentFrame <= totalFrames) {
        document.querySelector(`.frame${currentFrame}`).style.opacity = 1;
        currentFrame++;
      } else {
        clearInterval(interval);
      }
    }, 180); // 180ms pro Bild = ca. 1.6 Sekunden
  });