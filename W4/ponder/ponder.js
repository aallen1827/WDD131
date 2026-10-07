let dialog = document.querySelector("dialog");
let gallery = document.querySelector(".gallery");
let image = dialog.querySelector("img");
const closeButton = dialog.querySelector('.close-viewer');

gallery.addEventListener("click", function(event) {
    //console.log(event.target.src);
    if (event.target.src !== undefined) {
        image.src = event.target.src.replace("-sm", "-full");
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