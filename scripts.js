document.addEventListener("DOMContentLoaded", () => {
  const totalFrames = 9;
  let currentFrame = 1;

  const interval = setInterval(() => {
    document.querySelectorAll(".blatt-frame").forEach((frame, index) => {
      frame.style.opacity = index + 1 === currentFrame ? "1" : "0";
    });

    currentFrame++;

    if (currentFrame > totalFrames) {
      clearInterval(interval);
    }
  }, 180);
});