window.onload = () => {
  const frames = document.querySelectorAll(".blatt-frame");
  const totalFrames = frames.length;
  let current = 0;

  function showFrame() {
    frames.forEach((frame, index) => {
      frame.classList.remove("active");
    });

    if (frames[current]) {
      frames[current].classList.add("active");
      current++;
      if (current < totalFrames) {
        setTimeout(showFrame, 180);
      }
    }
  }

  // Starte Animation nur, wenn ALLE Bilder geladen sind
  let loaded = 0;
  frames.forEach(img => {
    if (img.complete) {
      loaded++;
    } else {
      img.onload = () => {
        loaded++;
        if (loaded === totalFrames) {
          showFrame();
        }
      };
    }
  });

  if (loaded === totalFrames) {
    showFrame();
  }
};
