const headerBurger = document.querySelector(".header__burger-menu");
const headerNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");

headerBurger.addEventListener("click", ()=>{
    headerBurger.classList.toggle("active");
    headerNav.classList.toggle("active");
    header.classList.toggle("lock");
})
