const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("nav-active");
});
