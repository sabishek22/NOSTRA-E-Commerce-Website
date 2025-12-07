const overlay = document.getElementById("overlay");

const dropdowns = {
  profile: document.querySelector(".profile-toggle"),
  menu: document.querySelector(".menu-toggle"),
  cart: document.querySelector(".cart-toggle")
};

const icons = {
  profile: document.querySelector(".font-profile i"),
  menu: document.querySelector(".font-menu i"),
  cart: document.querySelector(".font-cart i")
};

function openDropdown(dropdown) {
  Object.values(dropdowns).forEach(d => d.classList.remove("show"));
  overlay.classList.add("active");
  dropdown.classList.add("show");
}

function closeDropdowns() {
  Object.values(dropdowns).forEach(d => d.classList.remove("show"));
  overlay.classList.remove("active");
}

icons.profile.addEventListener("click", () => openDropdown(dropdowns.profile));
icons.menu.addEventListener("click", () => openDropdown(dropdowns.menu));
icons.cart.addEventListener("click", () => openDropdown(dropdowns.cart));

document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", closeDropdowns);
});

overlay.addEventListener("click", closeDropdowns);



//MEN SECTION TOGGLE//

let men = document.querySelector(".two-men")

let men_toggle = document.querySelector(".men-opt")

men.addEventListener("click",function(){
    men_toggle.classList.toggle("hidden")
})

//KID SECTION TOGGLE //

let kid = document.querySelector(".two-kid")

let kid_toggle = document.querySelector(".kid-opt")

kid.addEventListener("click",function(){
    kid_toggle.classList.toggle("hidden")
})

//POPULAR SECTION TOGGLE //

let popular = document.querySelector(".two-popular")

let pop_toggle = document.querySelector(".pop-opt")

popular.addEventListener("click",function(){
    pop_toggle.classList.toggle("hidden")
})

//ACCESORIES SECTION TOGGLE //

let access = document.querySelector(".two-accesories")

let acc_toggle = document.querySelector(".acc-opt")

access.addEventListener("click",function(){
    acc_toggle.classList.toggle("hidden")
})

//FOOTWEAR SECTION //

let foots = document.querySelector(".two-foots")

let foot_toggle = document.querySelector(".foot-opt")

foots.addEventListener("click",function(){
    foot_toggle.classList.toggle("hidden")
})

// WOMENS SECTION //

let women = document.querySelector(".two-women")

let women_toggle = document.querySelector(".women-opt")

women.addEventListener("click",function(){
    women_toggle.classList.toggle("hidden")
})

//SELLER SECTION LIKE//

let react = document.querySelector(".wanted-container");

react.addEventListener("click", function (event) {
  if (event.target.classList.contains("react-icon")) {
    event.target.classList.toggle("liked");
  }
});


