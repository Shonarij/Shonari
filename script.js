window.onload = () => {
  const arc = document.createElement("div");
  arc.id = "tinkerbell-arc";
  document.body.appendChild(arc);

  arc.animate(
    [
      { transform: "translateX(100vw) translateY(0) scale(0.5)", opacity: 0 },
      { transform: "translateX(50vw) translateY(-50vh) scale(1.2)", opacity: 1 },
      { transform: "translateX(0vw) translateY(0) scale(0.5)", opacity: 0 }
    ],
    {
      duration: 4000,
      easing: "ease-in-out",
      fill: "forwards"
    }
  );

  // Set the final glowing blue background
  setTimeout(() => {
    document.body.style.background = "radial-gradient(ellipse at center, #153170, #0b1536)";
    document.body.style.transition = "background 1.5s ease-in-out";
  }, 3000);
};
