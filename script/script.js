const burger = document.querySelector(".harm-burger");
const navLinks = document.querySelector(".nav-links");
const icon = burger.querySelector("i");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});
