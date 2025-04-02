console.log("DOM vollständig geladen");
document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".blatt-frame");
  const totalFrames = frames.length;
  let current = 0;

  // Initialzustand: alle ausblenden
  frames.forEach(frame => frame.style.opacity = 0);

  function animateFrames() {
    console.log("Animation gestartet");
    if (current < totalFrames) {
      frames.forEach(f => f.classList.remove("active")); // Alle Frames unsichtbar
      if (frames[current]) {
        frames[current].classList.add("active"); // Aktuellen Frame aktiv setzen
      }

      current++;
      setTimeout(animateFrames, 180);
    }
  }

  animateFrames(); // Start der Animation
});