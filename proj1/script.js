document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle");
  const stateText = document.getElementById("toggle-state");
  let flipped = false;

  // Initialize state display
  stateText.textContent = "Currently: (x, y)";

  button.addEventListener("click", () => {
    document.querySelectorAll(".coord").forEach(p => {
      const x = p.dataset.x;
      const y = p.dataset.y;
      const label = p.dataset.label;

      if (!flipped) {
        p.textContent = `${label}: (${y}, ${x})`;
      } else {
        p.textContent = `${label}: (${x}, ${y})`;
      }
    });

    // Toggle the flipped state
    flipped = !flipped;

    // Update the button state display
    stateText.textContent = flipped
      ? "Currently: (x, y)"
      : "Currently: (row, col)";
  });
});
