// Initialize tsParticles for the interactive particle background
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1
    },
    collisions: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1,
      straight: false
    },
    number: { density: { enable: true, area: 800 }, value: 60 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } }
  },
  detectRetina: true
});

// Scroll fade-in effect for sections
const fadeEls = document.querySelectorAll('.fade-in');
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

fadeEls.forEach(el => observer.observe(el));
