document.addEventListener("DOMContentLoaded", function () {
    let carousel = new bootstrap.Carousel('#techCarousel', {
      interval: 1500,  // cada 1.5 segundos cambia
      ride: 'carousel',
      pause: false     // evita que se pause al pasar el mouse
    });
  });