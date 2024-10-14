const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links li a");
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    navItems.forEach((link) => link.classList.remove("nav-active"));
    e.target.classList.add("nav-active");
    navLinks.classList.remove("active");
  });
});

const portfolioItems = document.querySelectorAll(".port-links li");
portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".active-port")?.classList.remove("active-port");
    item.classList.add("active-port");
  });
});
