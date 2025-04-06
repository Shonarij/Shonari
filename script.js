window.onload = () => {
  const arc = document.createElement("div");
  arc.id = "tinkerbell-arc";
  document.body.appendChild(arc);

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

  setTimeout(() => {
    document.body.style.background = "radial-gradient(ellipse at center, #b6ccff, #1f2755)";
  }, 3000);
};
