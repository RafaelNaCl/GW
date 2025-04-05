window.onload = () => {
  const frames = document.querySelectorAll(".blatt-frame");
  const totalFrames = frames.length;
  let current = 0;

  function showFrame() {
    frames.forEach((f, i) => {
      f.classList.remove("active");
    });
    frames[current].classList.add("active");

    current = (current + 1) % totalFrames;

    // Zufälligeres Timing zwischen 180–300ms
    const nextDelay = 180 + Math.random() * 120;
    setTimeout(showFrame, nextDelay);
  }

  showFrame();
};
