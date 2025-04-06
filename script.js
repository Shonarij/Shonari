const canvas = document.getElementById("arcCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = Math.PI;
let radius = canvas.height / 2.5;
let centerX = canvas.width;
let centerY = canvas.height / 1.3;
const fairyDust = [];

function drawArc() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Arc trail
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.arc(centerX, centerY, radius, Math.PI, 0);
  ctx.stroke();

  // Fairy dust
  fairyDust.forEach((p, i) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
    p.y += 1;
    p.alpha -= 0.01;
    if (p.alpha <= 0) fairyDust.splice(i, 1);
  });

  // New fairy dust
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  fairyDust.push({ x, y, alpha: 1 });

  angle -= 0.02;
  if (angle < 0) angle = Math.PI;

  requestAnimationFrame(drawArc);
}

drawArc();
