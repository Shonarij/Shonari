window.onload = () => {
  // Create the arc element
  const arc = document.createElement("div");
  arc.id = "tinkerbell-arc";
  document.body.appendChild(arc);
  
  // Animate the arc from right to left in a curved swoop
  arc.animate(
    [
      { transform: "translateX(100vw) translateY(0) scale(0.5)", opacity: 0 },
      { transform: "translateX(50vw) translateY(-50vh) scale(1.1)", opacity: 1 },
      { transform: "translateX(0vw) translateY(0) scale(0.5)", opacity: 0 }
    ],
    {
      duration: 3500,
      easing: "ease-in-out",
      fill: "forwards"
    }
  );

  // Change the background to VHS-inspired blue after arc finishes
  setTimeout(() => {
    document.body.style.background = "radial-gradient(ellipse at center, #b6ccff, #1f2755)";
    document.body.style.transition = "background 1.5s ease-in-out";
  }, 3000);
};
