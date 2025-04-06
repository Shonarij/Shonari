window.onload = () => {
  const arc = document.getElementById("tinkerbell-arc");

  arc.animate(
    [
      { transform: "translateX(100vw) translateY(0) scale(0.5)", opacity: 0 },
      { transform: "translateX(50vw) translateY(-40vh) scale(1.2)", opacity: 1 },
      { transform: "translateX(0vw) translateY(0) scale(0.5)", opacity: 0 }
    ],
    {
      duration: 4000,
      easing: "ease-in-out",
      fill: "forwards"
    }
  );
};
