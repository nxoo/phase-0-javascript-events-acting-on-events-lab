let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff69b4";

function moveDodgerLeft() {
    let leftValue = dodger.style.left.replace("px", "");
    let leftInt = parseInt(leftValue, 10);

    if (leftInt > 0) {
        dodger.style.left = `${leftInt - 1}px`;
    }
}

function moveDodgerRight() {
    const rightvalue = dodger.style.left.replace("px", "");
    const rightInt = parseInt(rightvalue, 10);

    if (rightInt < 360) {
        dodger.style.left = `${rightInt + 1}px`;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37) {
        moveDodgerLeft();
    }
    if (event.keyCode === 39) {
        moveDodgerRight();
    }
});

