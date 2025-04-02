document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".blatt-frame");
  const totalFrames = frames.length;
  let current = 0;

  // Initialzustand: alle ausblenden
  frames.forEach(frame => frame.style.opacity = 0);

  function animateFrames() {
    if (current < totalFrames) {
      frames[current].style.opacity = 1;

      if (current > 0) {
        frames[current - 1].style.opacity = 0;
      }

      current++;
      setTimeout(animateFrames, 180);
    }
  }

  animateFrames(); // Start der Animation
});