document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".blatt-frame");
  let current = 0;

  function showNextFrame() {
    frames.forEach((f, i) => {
      f.style.opacity = i === current ? "1" : "0";
    });

    current++;
    if (current < frames.length) {
      setTimeout(showNextFrame, 180);
    }
  }

  showNextFrame();
});