body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: black;
  animation: blueFade 10s ease forwards;
  color: white;
  overflow-x: hidden;
}

@keyframes blueFade {
  0% { background: black; }
  25% { background: #001233; }
  50% { background: #0047ab; }
  75% { background: #87bfff; }
  100% { background: #24477b; } /* Settles on a darker, readable blue */
}

.intro {
  text-align: center;
  margin-top: 15vh;
}

.name {
  font-size: 3em;
  opacity: 0;
  animation: fadeInName 4s ease-in-out 6s forwards;
  text-shadow: 0 0 12px white;
}

@keyframes fadeInName {
  to {
    opacity: 1;
  }
}

#arcCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}

.resume-section {
  max-width: 800px;
  margin: 5vh auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  color: white;
  font-size: 1rem;
  line-height: 1.6;
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.1);
}
