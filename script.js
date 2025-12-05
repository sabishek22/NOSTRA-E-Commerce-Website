//PROFILE TOGGLE//

let profile = document.querySelector(".font-profile")

let prof_toggle = document.querySelector(".profile-toggle")

profile.addEventListener("click",function(){
    prof_toggle.classList.toggle("hidden")
})

//MENU TOGGLE//

let menu = document.querySelector(".font-menu")

let menu_toggle = document.querySelector(".menu-toggle")

menu.addEventListener("click",function(){
    menu_toggle.classList.toggle("hidden")
})

//CART TOGGLE//

let cart = document.querySelector(".font-cart")

let cart_toggle = document.querySelector(".cart-toggle")

cart.addEventListener("click",function(){
    cart_toggle.classList.toggle("hidden")
})


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


