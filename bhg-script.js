// bhg-script.js

// Smooth scroll for anchor links (future-proofing)
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Cycle title text every 3 seconds
let titles = [
  "🎮 Black Hindi Gamer 🎮",
  "🔥 BHG 🔥",
  "👾 Let's Game Together 👾"
];
let i = 0;
setInterval(() => {
  document.title = titles[i % titles.length];
  i++;
}, 3000);

// Log message on page load
window.addEventListener('load', () => {
  console.log("Welcome to BHG's world!");
});