// Dark Mode Feature
const btn = document.querySelector(".btn-toggle");
const darkIcon = btn.querySelector(".fa-moon");
const lightIcon = btn.querySelector(".fa-sun");
const lightLogo = document.querySelector(".light-logo");
const darkLogo = document.querySelector(".dark-logo");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkIcon.style.display = "none";
    lightIcon.style.display = "inline";
    lightLogo.style.display = "none";
    darkLogo.style.display = "inline";
  } else {
    darkIcon.style.display = "inline";
    lightIcon.style.display = "none";
    lightLogo.style.display = "inline";
    darkLogo.style.display = "none";
  }
});

// Hamburger Menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.querySelector("nav ul");
const hamburgerIcon = hamburgerMenu.querySelector(".fa-bars");
const closeIcon = document.createElement("i");
closeIcon.classList.add("fas", "fa-times");
closeIcon.style.display = "none";
hamburgerMenu.appendChild(closeIcon);

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "inline";
  } else {
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
});

// Sticky Navbar
window.onscroll = function () {
  makeSticky();
};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;
var mainSection = document.querySelector("main");
var navbarHeight = navbar.offsetHeight;

function makeSticky() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    mainSection.style.paddingTop = navbarHeight + "px";
  } else {
    navbar.classList.remove("sticky");
    mainSection.style.paddingTop = 0;
  }
}

// To Top Button
var mybutton = document.getElementById("btnTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.onclick = function () {
  topFunction();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
