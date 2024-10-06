var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let featuredCake = document.querySelector(".featured-cake");
let featuredDrink = document.querySelector(".featured-drink");
let featuredSnacks = document.querySelector(".featured-snacks");
let featCake = document.querySelector(".featCake");
let iceCream = document.querySelector(".ice-cream");
let snacks = document.querySelector(".snacks");

featuredCake.addEventListener("click", featuredCakeBtn);
function featuredCakeBtn() {
  featCake.style.display = "grid";
  iceCream.style.display = "none";
  snacks.style.display = "none";
  featuredSnacks.style.color = "black";
  featuredDrink.style.color = "black";
  featuredCake.style.color = "#F67D65";
}

featuredDrink.addEventListener("click", featuredDrinkBtn);
function featuredDrinkBtn() {
  iceCream.style.display = "grid";
  featCake.style.display = "none";
  snacks.style.display = "none";
  featuredCake.style.color = "black";
  featuredSnacks.style.color = "black";
  featuredDrink.style.color = "#F67D65";
}

featuredSnacks.addEventListener("click", featuredSnacksBtn);
function featuredSnacksBtn() {
  snacks.style.display = "grid";
  iceCream.style.display = "none";
  featCake.style.display = "none";
  featuredDrink.style.color = "black";
  featuredCake.style.color = "black";
  featuredSnacks.style.color = "#F67D65";
}
