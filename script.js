const menuToggler = document.getElementById("toggler");
const mobMenu = document.getElementsByClassName("mob-menu")[0];
const closeMenu = document.getElementById("mob-close");

menuToggler.addEventListener('click', () => {
    mobMenu.classList.toggle("hidden");
    document.body.style = "overflow: hidden";
})

closeMenu.addEventListener('click', () => {
    mobMenu.classList.toggle("hidden");
    document.body.style = "overflow: show";
})