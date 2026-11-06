const characters = document.querySelector("#characters");

const snortleblat = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "snortleblat.webp",
    attacked: function () {
        if (this.health > 0) {
            this.health -= 20;
            renderCharacter(this);
        } else {
            alert("Character died");
        }
    },
    levelUp: function () {
        this.level += 1;
        renderCharacter(this);
    }
}

function renderCharacter(character) {
    const card = `
        <article class="card">
            <img class="image" src=${character.image}>
            <h1 class="name">${character.name}</h1>
            <div class="stats">
                <p><strong>Class: </strong>${character.class}</p>
                <p><strong>Level: </strong>${character.level}</p>
                <p><strong>Health: </strong>${character.health}</p>
            </div>
            <div class="buttons">
                <button id="attacked">Attacked</button>
                <button id="levelUp">Level Up</button>
            </div>
        </article>
    `
    characters.innerHTML = card;

    const attackButton = document.querySelector("#attacked");
    const levelButton = document.querySelector("#levelUp");

    attackButton.addEventListener("click", () => {
        snortleblat.attacked();
    });

    levelButton.addEventListener("click", () => {
        snortleblat.levelUp();
    });
}

renderCharacter(snortleblat);

