const canvas = document.getElementById("arcCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = Math.PI; // starts from right to left
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
  ctx.arc(centerX, centerY, radius, Math.PI, angle, true);
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

  const dustX = centerX + radius * Math.cos(angle);
  const dustY = centerY + radius * Math.sin(angle);
  fairyDust.push({ x: dustX, y: dustY, alpha: 1 });

  if (angle > 0) {
    angle -= 0.01; // Slower arc
    requestAnimationFrame(drawArc);
  }
}

window.onload = drawArc;
