window.onload = () => {
  const frames = document.querySelectorAll(".blatt-frame");
  const totalFrames = frames.length;
  let current = 0;
  let loadedCount = 0;

  // Warte, bis alle Bilder geladen sind
  frames.forEach((img) => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          startAnimation();
        }
      };
    }
  });

  // Falls alle schon im Cache sind
  if (loadedCount === totalFrames) {
    startAnimation();
  }

  function startAnimation() {
    function showNextFrame() {
      frames.forEach(f => f.classList.remove("active"));
      if (frames[current]) {
        frames[current].classList.add("active");
      }
      current++;
      if (current < totalFrames) {
        setTimeout(showNextFrame, 180);
      }
    }

    setTimeout(showNextFrame, 200); // kleiner Startpuffer
  }
};