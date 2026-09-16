//declare a variable
let age = 23;

//print age
console.log(age);

age = 26;

//constant variable
const name = "my name";
//name = "new"; this doesn't work

//scope = where you can reference a variable
if(age == 26) {
    //new scope
    console.log(age);
    const color = "Blue";
    let name = "inScope";
    console.log(name);
    //if only will use variable in scope, declare it in that scope
}

console.log(name);
const color = "red";
console.log(color);

//grab h1 from DOM and make it blue with CSS
document.querySelector("h1").style.color = "blue";