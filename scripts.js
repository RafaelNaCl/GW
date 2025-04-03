window.onload = () => {
  const frames = document.querySelectorAll(".blatt-frame");
  const totalFrames = frames.length;
  let current = 0;

  console.log("Frames gefunden:", totalFrames);

  function showNextFrame() {
    frames.forEach(f => f.classList.remove("active"));
    if (frames[current]) {
      frames[current].classList.add("active");
      console.log("Zeige Frame:", current + 1);
    }
    current++;
    if (current < totalFrames) {
      setTimeout(showNextFrame, 180);
    }
  }

  setTimeout(showNextFrame, 200); // kleiner Puffer
};