// const burger = document.querySelector(".burger");
// const navigationList = document.querySelector(".navigation-list");

// burger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     burger.classList.toggle("active");
//     navigationList.classList.toggle("active");
// }

// const navigationLink = document.querySelectorAll("navigation-link");

// navigationLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     burger.classList.remove("active");
//     navigationList.classList.remove("active");
// }


const burger = document.querySelector(".burger");
const navlist = document.querySelector(".navigation__list");
const navLink = document.querySelectorAll(".navigation__link");

burger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    burger.classList.toggle("active");
    navlist.classList.toggle("active");
}

function closeMenu() {
    burger.classList.remove("active");
    navlist.classList.remove("active");
}