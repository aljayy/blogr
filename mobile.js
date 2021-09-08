`use strict`;

const hamburger = document.querySelector(`#ham-menu`);
const overlay = document.querySelector(`.overlay`);
const anchor = document.querySelectorAll(".anchor");
const link = document.querySelectorAll(`.links`);

hamburger.addEventListener(`click`, function () {
  overlay.classList.toggle(`display`);

  for (let i = 0; i < anchor.length; i++) {
    anchor[i].addEventListener("click", function () {
      link[i].classList.toggle("display");
    });
  }
});
