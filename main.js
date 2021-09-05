import gsap from "gsap";
import {
  ScrollToPlugin
} from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import _ from "lodash";

const itemEl = document.querySelector(".item");
const arrowUpBtnEl = document.querySelector(".arrow-up");

function scrolltoTop() {
  gsap.to(window, .7, {
    scrollTo: {
      y: 0
    }
  });
}

function scrolled() {
  if (window.scrollY > 200) {
    gsap.to(itemEl, 1, {
      opacity: 0,
      display: "none"
    });
    gsap.to(arrowUpBtnEl, .5, {
      opacity: 1,
      display: "block"
    });
  } else {
    gsap.to(itemEl, 1, {
      opacity: 1,
      display: "block"
    });
    gsap.to(arrowUpBtnEl, .5, {
      opacity: 0,
      display: "none"
    });
  }
}

function init() {
  document.addEventListener("scroll", _.throttle(scrolled, 300));
  arrowUpBtnEl.addEventListener("click", scrolltoTop);
}

init();