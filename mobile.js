`use strict`;
const hamburger = document.querySelector(`#ham-menu`);
const menu = document.querySelector(`#mobile-menu`);

hamburger.addEventListener(`click`, function () {
  menu.classList.toggle(`display`);
  console.log(`Hello`);
});
