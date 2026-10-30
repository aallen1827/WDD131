const form  = document.querySelector("#mainForm");
const personType = document.querySelector("#personType");
const codeContainer = document.querySelector("#codeContainer");
const code = document.querySelector("#code");
const output = document.querySelector("#output");
const codeLabel = document.querySelector("#codeLabel");

//change code label
personType.addEventListener("change", () => {
    if (personType.value == "student") {
        codeLabel.textContent = "Student I#";
    }
    if (personType.value == "guest") {
        codeLabel.textContent = "Access Code";
    }
    codeContainer.style.display = "flex";
})


form.addEventListener("submit", function(event) {
    event.preventDefault();
    output.textContent = "";
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const type = form.personType.value;
    const eventDate = form.eventDate.value;

    function isPastDate(value) {
        const today = new Date();
        const chosen = new Date(value);
        return chosen < today;
    }

    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    if (type == "student" && (code.value.length !== 9)) {
        output.textContent = "Ensure your I# is 9 digits";
        return;
    }

    if (type == "guest" && (code.value !== "EVENT131")) {
        output.textContent = "Please input the correct code";
        return;
    }

    output.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${type}</p>
        <p>${eventDate}</p>
    `
    form.reset();
})