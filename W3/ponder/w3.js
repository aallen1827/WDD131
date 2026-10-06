let menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", function (e) {
    let nav = document.querySelector("nav");
    menuButton.classList.toggle("change");
    nav.classList.toggle("stuff");
    document.querySelectorAll("nav a").forEach(element => {
        element.classList.toggle('chang');
    });   
});