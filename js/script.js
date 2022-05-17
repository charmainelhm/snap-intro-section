const expandableNavGroup = document.querySelectorAll(".nav-expandable-group");
const openNavBtn = document.querySelector(".nav__button-open");
const closeNavBtn = document.querySelector(".nav__button-close");
const navContent = document.querySelector(".nav-content");
const navBgPanel = document.querySelector(".background-panel");
const navBtnGrp = [openNavBtn, closeNavBtn];

const toggleNavPanel = function () {
  navContent.classList.toggle("nav-content--hidden");
  navBgPanel.classList.toggle("background-panel--visible");
};

expandableNavGroup.forEach((list) => {
  list.addEventListener("click", function () {
    list.classList.toggle("nav--expanded");
  });
});

navBtnGrp.forEach((btn) => {
  btn.addEventListener("click", toggleNavPanel);
});

navBgPanel.addEventListener("click", toggleNavPanel);
