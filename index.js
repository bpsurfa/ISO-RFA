const links = document.querySelectorAll('a[href^="#"]');

// Attach click event listeners to all anchor links
links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Smooth scroll function
function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href').slice(1);
  const target = document.getElementById(targetId);

  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // Set the behavior to smooth for smooth scrolling
    });
  }
}