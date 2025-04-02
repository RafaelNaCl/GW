document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".blatt-frame");
  const delay = 180; // Millisekunden zwischen den Frames

  function showFrame(index) {
    // Alle ausblenden
    frames.forEach((frame) => (frame.style.opacity = "0"));

    // Aktuelles anzeigen
    if (frames[index]) {
      frames[index].style.opacity = "1";
    }

    // Nächsten Frame vorbereiten
    if (index + 1 < frames.length) {
      setTimeout(() => showFrame(index + 1), delay);
    }
  }

  // Start
  showFrame(0);
});