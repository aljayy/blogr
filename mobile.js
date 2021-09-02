`use strict`;
const hamburger = document.querySelector(`#ham-menu`);
const menu = document.querySelector(`#mobile-menu`);
const title = document.querySelectorAll(`.title`);
const links = document.querySelectorAll(`.links-hidden`);

hamburger.addEventListener(`click`, function () {
  menu.classList.toggle(`display`);
  console.log(`Hello`);
});

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener(`click`, function () {
    links[i].classList.toggle(`display`);
  });
}
