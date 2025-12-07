const userIcon = document.querySelector(".user-icon");
const menuToggle = document.querySelector(".menu-toggle");
const dropdown = document.querySelector(".user-dropdown");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.getElementById("overlay");

userIcon.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  overlay.classList.toggle("show");
});

menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  dropdown.classList.remove("show");
  sideMenu.classList.remove("show");
  overlay.classList.remove("show");
});
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    dropdown.classList.remove("show");
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
  });
});
