'use strict';

const namesInput = document.querySelector('#nameInput');
const drawBtn = document.querySelector('#drawBtn');
const winnerModal = document.querySelector('#winnerModal');
const winnerName = document.querySelector('#winnerName');
const closeModal = document.querySelector('#closeModal');
const namesPreview = document.querySelector('#namesPreview');
const spinner = document.querySelector('#spinner');
const confettiCanvas = document.querySelector('#confettiCanvas');

const ctx = confettiCanvas.getContext('2d');

let confettis = [];

const resizeCanvas = () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
};

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Confetti generator
const createConfetti = function () {
  for (let i = 0; i < 150; i++) {
    confettis.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 10 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    });
  }
};

const drawConfetti = function () {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettis.forEach((c) => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.r, c.r);
  });

  updateConfetti();
};

function updateConfetti() {
  confettis.forEach((c) => {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.x += Math.sin(c.d);
    if (c.y > confettiCanvas.height) {
      c.x = Math.random() * confettiCanvas.width;
      c.y = -10;
    }
  });
}

function startConfetti() {
  confettis = [];
  createConfetti();
  let duration = 3000; // 3 seconds
  const end = Date.now() + duration;
  const animate = () => {
    drawConfetti();
    if (Date.now() < end) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  };
  animate();
}
