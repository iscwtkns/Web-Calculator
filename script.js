const display = document.querySelector(".display");
const keys = document.querySelector(".keys");
var firstNum = null;
var operator = null;

keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if (!action) {
            if (displayedNum === "0") {
                display.textContent = keyContent;
            } else {
                display.textContent += keyContent;
            }
        }

        if (action === "sum" || action === "difference" || action === "product" || action === "quotient") {
            firstNum = displayedNum; // Update to consistent naming convention
            operator = action;
            display.textContent = "0";
        }

        // Handle equals button click
        if (action === 'result') {
            if (operator && firstNum !== null) { // Check if there's an operator and a first number
                display.textContent = calculate(parseFloat(firstNum), operator, parseFloat(displayedNum));
            }
        }

        if (action === "clear") {
            display.textContent = "0";
            operator = null;
            firstNum = null;
        }
    }
});

function calculate(num1, operator, num2) {
    switch (operator) {
        case "sum":
            return num1 + num2;
        case "difference":
            return num1 - num2;
        case "product":
            return num1 * num2;
        case "quotient":
            return num1 / num2;
    }
}