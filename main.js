"use strict";

// ======================================

const menuIcon = document.querySelector("#menu-icon");
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");

// toggle icon navbar ////////////////////////////

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// scroll sections ///////////////////////////////

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });

      // active sections for animation on scroll
      sec.classList.add("show-animate");
    }
    // if want to use animation that repeats on scroll use this
    else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky header

  header.classList.toggle("sticky", window.scrollY > 100);
};

// remove toggle icon and navbar when click navbar links (scroll)
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// animation on footer on scroll

window.addEventListener("scroll", () => {
  footer.classList.toggle(
    "show-animate",
    window.innerHeight + window.scrollY >=
      document.scrollingElement.scrollHeight
  );
});
