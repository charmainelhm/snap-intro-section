const expandableNavGroup = document.querySelectorAll(".nav-expandable-group");
const openNavBtn = document.querySelector(".nav__button-open");
const closeNavBtn = document.querySelector(".nav__button-close");
const navContent = document.querySelector(".nav-content");
const navBgPanel = document.querySelector(".background-panel");
const navBtnGrp = [openNavBtn, closeNavBtn];
const heroSection = document.querySelector(".hero-section");
const heroImg = document.querySelector(".hero__img");
const mediaQuery = window.matchMedia("(max-width: 599px)");

const toggleNavPanel = function () {
  navContent.classList.toggle("nav-content--hidden");
  navBgPanel.classList.toggle("background-panel--visible");
};

const handleViewportChange = function (e) {
  if (e.matches) {
    heroSection.classList.remove("container");
    heroImg.src = "images/image-hero-mobile.png";
  } else {
    heroSection.classList.add("container");
    heroImg.src = "images/image-hero-desktop.png";
  }
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

mediaQuery.addEventListener("change", handleViewportChange);
