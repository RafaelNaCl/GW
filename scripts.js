document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".blatt-frame");
  const totalFrames = frames.length;
  let current = 0;

  function animateFrames() {
    frames.forEach(f => f.classList.remove("active"));
    if (frames[current]) {
      frames[current].classList.add("active");
    }
    current++;
    if (current < totalFrames) {
      setTimeout(animateFrames, 180);
    }
  }

  animateFrames();
});