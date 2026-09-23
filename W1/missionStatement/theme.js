let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let text = document.querySelector("#everything");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        text.classList.toggle("darkMode");
        logo.src = "byui-logo-white.png";
    } else {
        text.classList.toggle("darkMode");
        logo.src = "byui-logo-blue.webp";
    }
}           
                