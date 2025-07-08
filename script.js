// Smooth scrolling for nav links
document.querySelectorAll('nav a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      // Focus for accessibility
      targetSection.setAttribute('tabindex', '-1');
      targetSection.focus();
    }
  });
});

// ScrollReveal animations
ScrollReveal().reveal('.reveal', {
  distance: '50px',
  duration: 800,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 200
});
