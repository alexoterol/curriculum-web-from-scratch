document.addEventListener('DOMContentLoaded', () => {
  // Configure particles.js
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#7e6dcb"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 1,
          "color": "#eeeeee"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 80,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 10,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#eeeeee",
        "opacity": 0.25,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  // Add a subtle parallax effect to the particles when scrolling
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const headerElement = document.querySelector('header');
    
    if (headerElement && scrollY <= headerElement.offsetHeight) {
      const particlesCanvas = document.querySelector('#particles-js canvas');
      if (particlesCanvas) {
        particlesCanvas.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    }
  });
});
