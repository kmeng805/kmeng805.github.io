document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dark-mode-toggle");

  // Dark mode toggle logic
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
    }
  });

  // Table of Contents logic
  const tocLinks = document.querySelectorAll(".sidebar a[href^='#']");
  const sections = Array.from(tocLinks).map(link => {
    const id = link.getAttribute("href").substring(1); // Get the id without #
    return document.getElementById(id);
  });

  // Highlight the current section in the Table of Contents
  function highlightCurrentSection() {
    let scrollPosition = window.scrollY + 100; // Offset for header

    // Find which section is currently in the viewport
    let currentIndex = sections.findIndex((section, i) => {
      const nextSection = sections[i + 1];
      return scrollPosition >= section.offsetTop &&
             (!nextSection || scrollPosition < nextSection.offsetTop);
    });

    // Remove the active class from all links
    tocLinks.forEach(link => link.classList.remove("active-toc"));
    
    // Add the active class to the corresponding link
    if (currentIndex !== -1 && tocLinks[currentIndex]) {
      tocLinks[currentIndex].classList.add("active-toc");
    }
  }

  // Listen for scroll events and highlight accordingly
  window.addEventListener("scroll", highlightCurrentSection);
  
  // Initial call to highlight the correct section on page load
  highlightCurrentSection();
});
