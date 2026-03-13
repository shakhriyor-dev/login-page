// Cursor Glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // Mouse-reactive gradient background
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    document.body.style.background = `linear-gradient(${x*360}deg, #0f172a, #1e293b ${y*100}%)`;
});

// 3D Card Parallax
const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 20;
    let y = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Magnetic Button Effect
const btn = document.querySelector("button");

document.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width/2);
    const dy = e.clientY - (rect.top + rect.height/2);
    const dist = Math.sqrt(dx*dx + dy*dy);
    const maxDist = 150;
    if(dist < maxDist){
        btn.style.transform = `translate(${dx*0.2}px, ${dy*0.2}px)`;
    } else{
        btn.style.transform = `translate(0px,0px)`;
    }
});

// Particles.js Configuration
particlesJS("particles-js", {
    "particles": {
        "number": {"value":90},
        "color": {"value":"#00ffff"},
        "shape": {"type":"circle"},
        "opacity": {"value":0.6},
        "size": {"value":3},
        "move": {"enable":true,"speed":2}
    }
});