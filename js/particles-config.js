particlesJS("particles-js", {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 900 } }, // ile kropek
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.8, // jasność kropek
      random: true,
      anim: { enable: true, speed: 0.4, opacity_min: 0.3, sync: false } // delikatne migotanie
    },
    size: { value: 5, random: true }, // wielkość kropek
    line_linked: {
      enable: true,
      distance: 160,     // jak blisko muszą być kropki, żeby się połączyć
      color: "#ffffff",
      opacity: 0.25,     // jasność linii
      width: 1.2 // grubość linii
    },
    move: {
      enable: true,
      speed: 0.4, // prędkość
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "grab" }, // linie do kursora
      onclick: { enable: false },
      resize: true
    },
    modes: {
      grab: { distance: 160, line_linked: { opacity: 0.5 } }
    }
  },
  retina_detect: true
});
