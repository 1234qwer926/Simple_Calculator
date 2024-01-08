const nightMode = document.querySelector(".night");
const dayMode = document.querySelector(".day");
const back = document.querySelector(".backclr");
const h=document.querySelector("h1");

nightMode.addEventListener("click", () => {
    back.style.backgroundColor = "black";
    h.style.color="white";
});
dayMode.addEventListener("click", () => {
    back.style.backgroundColor = "white";
    h.style.color="black";
});




const display = document.querySelector("input[name='display']");
// console.log(display.value);

function updateDisplay(value) {
    display.value = value;
}

function calculateResult() {
    try {
        updateDisplay(eval(display.value));
    } catch (error) {
        updateDisplay("Error");
    }
}

function handleButtonClick(buttonValue) {
    switch (buttonValue) {
        case "Ac":
            updateDisplay("");
            break;
        case "DE":
            updateDisplay(display.value.slice(0, -1));
            break;
        case "=":
            calculateResult();
            break;
        default:
            updateDisplay(display.value + buttonValue);
    }
}

const buttons = document.querySelectorAll(".calculator input[type='button']");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        handleButtonClick(this.value);
    });
});

