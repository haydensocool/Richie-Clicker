console.log("JS loaded");

let richies = 0;
let richiesPerClick = 1;
let upgradeCost = 10;

const scoreDisplay = document.getElementById("score");
const cookieButton = document.getElementById("cookieButton");
const upgradeButton = document.getElementById("upgrade");

function updateDisplay() {
    scoreDisplay.textContent = "Richies: " + richies;
    upgradeButton.textContent = "Buy Upgrade (" + upgradeCost + " Richies)";
}

// Clicking cookie
cookieButton.addEventListener("click", function () {
    richies += richiesPerClick;
    console.log(richies);
    updateDisplay();
});

// Buying upgrade
upgradeButton.addEventListener("click", function () {
    if (richies >= upgradeCost) {
        richies -= upgradeCost;
        richiesPerClick++;
        upgradeCost *= 2;
        updateDisplay();
    }
});

updateDisplay();

cookieButton.addEventListener("click", function () {
    richies += richiesPerClick;
    updateDisplay();

    popSound.currentTime = 0;
    popSound.play();
});
