
var burger = document.querySelector(`.header__hamburger`);
var nav = document.querySelector(".header__nav");
// var link = document.querySelector(".main-link");





burger.addEventListener(`click`, function() {
  nav.classList.toggle(`header__nav--active`);
  // main.classList.toggle('main-link--active');
  burger.classList.toggle(`header__hamburger--active`)
});