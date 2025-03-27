const nav = document.getElementById("mobile-nav");
const hamburger = document.getElementById("hamburger");
const themeToggle = document.getElementById("theme-toggle");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  hamburger.innerText = menuOpen ? "🍔" : "❌";
  menuOpen = !menuOpen;
});

themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeToggle.innerText = isLight ? "🌙" : "☀️";
});

// Set initial theme icon
if (localStorage.getItem("theme") === "light") {
  themeToggle.innerText = "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light");
  }
});