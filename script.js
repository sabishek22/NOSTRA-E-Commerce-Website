//MENU-TOGGLE//

let togg = document.getElementById("menu-icon");

let menu_toggle = document.querySelector(".menu-toggle");

togg.addEventListener("click", function () {
  menu_toggle.classList.toggle("hidden");
});

//SELLER SECTION LIKE//

let react = document.querySelector(".wanted-container");

react.addEventListener("click", function (event) {
  if (event.target.classList.contains("react-icon")) {
    event.target.classList.toggle("liked");
  }
});


