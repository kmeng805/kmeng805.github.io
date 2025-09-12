document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle");
  const stateText = document.getElementById("toggle-state");
  let flipped = false;

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

    flipped = !flipped;

    stateText.textContent = flipped
      ? "Currently: (x, y)"
      : "Currently: (row, col)";
  });

  const toggle = document.getElementById('dark-mode-toggle');

  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
    }
  });

});
