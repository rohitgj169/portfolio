const toggleBtn = document.querySelector(".menu-toggle");
const menuLines = document.querySelectorAll(".menu-line");
const projectMainBtn = document.querySelector(".btn-scroll-project");
const logoBtn = document.querySelector(".btn-scroll-logo");
const navLinks = document.querySelector(".nav-links");
const projectSection = document.querySelector(".project-page");
const landingSection = document.querySelector("#landing-section");

let menuOpen = false;

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
  if (!menuOpen) {
    menuLines.forEach((line, idx) => {
      line.classList.add(`line-${idx}`);
      menuOpen = true;
    });
  } else {
    menuLines.forEach((line, idx) => {
      line.classList.remove(`line-${idx}`);
      menuOpen = false;
    });
  }
});

projectMainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectSection.scrollIntoView({ behavior: "smooth" });
});
