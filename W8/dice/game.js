document.querySelector("#rollButton").addEventListener("click", event => {
    const images = document.querySelectorAll("img");

    images.forEach(image => {
        
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    })

    setTimeout(() => {

        images.forEach(image => {
            
            if(isDieUnlocked(image)) {
                const number = Math.floor(Math.random() * 6) + 1;

                image.src = `assets/white_dice_${number}.gif`;
            }
        })
    }, 750);
});

function isDieUnlocked(image) {
    const checkboxes = document.querySelectorAll("input");

    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked => unchecked.className === image.className);
}