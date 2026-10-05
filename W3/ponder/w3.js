let menuButton = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");

menuButton.addEventListener("click", function (e) {
    if (nav.style.display === "") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "";
    }
});