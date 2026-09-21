// how to manipulate dom with js

//grab h1 from the page
let heading = document.querySelector("h1");

//let heading = document.querySelectorAll("h1");
//selects all of element type

console.log(heading);

//change text
heading.textContent = "Changed to something else";

//change text color
heading.style.color = "red";

//change other style
//css names are hyphenated, js is camelCase
heading.style.backgroundColor = "blue";

//retrieve id
document.getElementById("topics").style.color = "green";
//same as document.querySelector("#topics").style.color = "green"

let image = document.querySelector("img");


image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/5e/Spori_Building.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original");

console.log(image.getAttribute("src"));

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                