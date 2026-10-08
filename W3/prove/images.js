let dialog = document.querySelector("dialog");
let images = document.querySelector("#images");
let image = dialog.querySelector("img");
const closeButton = dialog.querySelector('.close-viewer');
let menuButton = document.querySelector(".menu-btn");

images.addEventListener("click", function(event) {
    //console.log(event.target.src);
    if (event.target.src !== undefined) {
        image.src = event.target.src.replace("-small", "-full");
        dialog.showModal();
    }
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

menuButton.addEventListener("click", function (e) {
    let nav = document.querySelector("nav");
    nav.classList.toggle("stuff");
    document.querySelectorAll("nav a").forEach(element => {
        element.classList.toggle('change');
    });   
});