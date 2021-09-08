`use strict`;

const hamburger = document.querySelector(`.ham-menu`);
const overlay = document.querySelector(`.overlay`);
const anchor = document.querySelectorAll(".anchor");
const link = document.querySelectorAll(`.links`);
const heading = document.querySelectorAll(".blue-heading");
const arrow = document.querySelectorAll(".arrow");
const x = document.querySelector(".close");

hamburger.addEventListener(`click`, function () {
  hamburger.classList.add("display");
  x.classList.remove("display");
  overlay.classList.remove(`display`);

  for (let i = 0; i < anchor.length; i++) {
    anchor[i].addEventListener("click", function () {
      link[i].classList.toggle("display");
      heading[i].classList.toggle("transparency");
      arrow[i].classList.toggle("rotate");
      arrow[i].style.transition = "300ms";
    });
  }
});

x.addEventListener("click", function () {
  x.classList.add("display");
  hamburger.classList.remove("display");
  overlay.classList.add("display");
});
