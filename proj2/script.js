document.addEventListener("DOMContentLoaded", function () {
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

  
  const tocLinks = document.querySelectorAll(".sidebar a[href^='#']");
  const sections = Array.from(tocLinks).map(link => {
    const id = link.getAttribute("href").substring(1);
    return document.getElementById(id);
  });

  function highlightCurrentSection() {
    let scrollPosition = window.scrollY + 100; // offset for header

    let currentIndex = sections.findIndex((section, i) => {
      const nextSection = sections[i + 1];
      return scrollPosition >= section.offsetTop &&
             (!nextSection || scrollPosition < nextSection.offsetTop);
    });

    tocLinks.forEach(link => link.classList.remove("active-toc"));
    if (currentIndex !== -1 && tocLinks[currentIndex]) {
      tocLinks[currentIndex].classList.add("active-toc");
    }
  }

  window.addEventListener("scroll", highlightCurrentSection);
  highlightCurrentSection(); // initial load
});
