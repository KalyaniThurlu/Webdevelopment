// Ensure the DOM is fully loaded before running the animation
document.addEventListener("DOMContentLoaded", function () {
  // Animation for the .boxblue element
  anime({
    targets: "div.boxblue",
    translateY: [
      { value: 100, duration: 200 },
      { value: 0, duration: 200 },
    ],
    rotate: "1turn",

    duration: 800,
    easing: "easeInOutQuad",
  });
});
// Ensure the DOM is fully loaded before running the animation
document.addEventListener("DOMContentLoaded", function () {
  // Animation for the .boxblue element
  anime({
    targets: "div.boxred",
    translateY: [
      { value: 100, duration: 200 },
      { value: 0, duration: 200 },
    ],
    rotate: "1turn",

    duration: 800,
    easing: "easeInOutQuad",
  });
});
// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1200, // Animation duration
  });

  // Anime.js animations
  anime({
    targets: "div.boxgreen",
    translateX: [
      { value: 100, duration: 200 },
      { value: 0, duration: 200 },
    ],
    rotate: "1turn",

    duration: 800,
    easing: "easeInOutQuad",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1200, // Animation duration
  });

  // Anime.js animations
  anime({
    targets: "div.boxyellow",
    translateX: [
      { value: 100, duration: 200 },
      { value: 0, duration: 200 },
    ],
    rotate: "1turn",

    duration: 800,
    easing: "easeInOutQuad",
  });
});
// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init();

  // Anime.js animations
  anime({
    targets: "div.boxblue",
    translateX: [
      { value: 100, duration: 200 },
      { value: 0, duration: 200 },
    ],
    rotate: "1turn",
    backgroundColor: "#FFF",
    duration: 800,
    easing: "easeInOutQuad",
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
