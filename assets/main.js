const toggleBtn = document.querySelector(".menu-toggle");
const projectMainBtn = document.querySelector(".btn-scroll-project");
const logoBtn = document.querySelector(".btn-scroll-logo");
const navLinks = document.querySelector(".nav-links");
const projectSection = document.querySelector(".project-page");
const landingSection = document.querySelector("#landing-section");

document.querySelectorAll(".nav-link").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = el.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

logoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  landingSection.scrollIntoView({ behavior: "smooth" });
});

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("nav-active");
});

projectMainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectSection.scrollIntoView({ behavior: "smooth" });
});

