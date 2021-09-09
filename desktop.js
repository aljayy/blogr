"use strict";
const dkanchor = document.querySelectorAll(".dk-anchor");
const dklinks = document.querySelectorAll(".dk-links");
const dkarrows = document.querySelectorAll(".arrow-light");

for (let i = 0; i < dkanchor.length; i++) {
  dkanchor[i].addEventListener("click", function () {
    dklinks[i].classList.toggle("display");
    dkarrows[i].classList.toggle("rotate");
    dkarrows[i].style.transition = "300ms";
  });
}
