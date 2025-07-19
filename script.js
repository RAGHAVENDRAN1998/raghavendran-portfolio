// Fade in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.1});
fadeEls.forEach(el => observer.observe(el));


// Animated background for hero (vertical glowing lines)
const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');

let width, height;
let lines = [];

function init() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = document.querySelector('.hero').offsetHeight;

  lines = [];
  const count = Math.floor(width / 20);
  for(let i=0; i<count; i++){
    lines.push({
      x: i * 20,
      y: Math.random() * height,
      length: 50 + Math.random() * 100,
      speed: 0.5 + Math.random() * 1,
      opacity: 0.1 + Math.random() * 0.3
    });
  }
}

function animate(){
  ctx.clearRect(0, 0, width, height);

  lines.forEach(line => {
    ctx.beginPath();
    const gradient = ctx.createLinearGradient(line.x, line.y, line.x, line.y + line.length);
    gradient.addColorStop(0, `rgba(0,180,216,${line.opacity})`);
    gradient.addColorStop(1, `rgba(0,180,216,0)`);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x, line.y + line.length);
    ctx.stroke();

    line.y += line.speed;
    if(line.y > height) line.y = -line.length;
  });

  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  init();
});

init();
animate();
