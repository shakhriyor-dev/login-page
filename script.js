// Cursor Glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// 3D Card Parallax
const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 20;
  let y = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Particles.js Configuration
particlesJS("particles-js", {
  particles: {
    number: { value: 90 },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    move: { enable: true, speed: 2 },
  },
});
