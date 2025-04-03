document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".blatt-frame");
  const totalFrames = frames.length;
  let current = 0;

  console.log("Frames gefunden:", totalFrames);

  function animateFrames() {
    frames.forEach(f => f.classList.remove("active"));
    if (frames[current]) {
      frames[current].classList.add("active");
      console.log("Zeige Frame:", current + 1);
    }
    current++;
    if (current < totalFrames) {
      setTimeout(animateFrames, 180);
    }
  }

  animateFrames();
});