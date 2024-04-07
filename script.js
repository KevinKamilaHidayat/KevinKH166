const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

console.log(menuToggle);

menuToggle.addEventListener("click", function () {
  console.log("clicked");
  nav.classList.toggle("slide");
});