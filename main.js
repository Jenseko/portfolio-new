"use strict";

// ======================================

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

// toggle icon navbar ////////////////////////////

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections ///////////////////////////////

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
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

window.addEventListener("scroll", function () {
  footer.classList.toggle(
    "show-animate",
    window.innerHeight + window.scrollY >=
      document.scrollingElement.scrollHeight
  );
});
