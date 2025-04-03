document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".blatt-frame");
  let currentFrame = 0;

  // Funktion zur Anzeige des aktuellen Frames
  function showFrame() {
    frames.forEach((frame, index) => {
      frame.style.opacity = index === currentFrame ? 1 : 0;
    });
    currentFrame++;
    if (currentFrame < frames.length) {
      setTimeout(showFrame, 180); // Zeigt jeden Frame für 180ms
    }
  }

  // Überprüfen, ob alle Bilder geladen sind
  let loadedImages = 0;
  frames.forEach((frame) => {
    if (frame.complete) {
      loadedImages++;
    } else {
      frame.onload = () => {
        loadedImages++;
        if (loadedImages === frames.length) {
          showFrame(); // Startet die Animation, wenn alle Bilder geladen sind
        }
      };
    }
  });

  // Falls alle Bilder bereits geladen sind (z.B. aus dem Cache)
  if (loadedImages === frames.length) {
    showFrame();
  }
});