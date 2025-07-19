// script.js

// Add active link highlight
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < triggerBottom) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

// Initialize fade-up effect
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(20px)';
});
