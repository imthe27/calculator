let firstnumber = 0;
let secondnumber = 0;
let operator = "";
let result = 0;
const display = document.getElementById("display");
const btns = document.querySelectorAll(".numbers");

function add(firstnumber, secondnumber) {
    result = firstnumber + secondnumber;
}

function substract(firstnumber, secondnumber) {
    result = firstnumber + secondnumber;
}

function multiply(firstnumber, secondnumber) {
    result = firstnumber * secondnumber;
}

function divide(firstnumber, secondnumber) {
    result = firstnumber / secondnumber;
}

function operate(firstnumber, secondnumber, operator) {
    switch (operator) {
        case "+":
            add(firstnumber, secondnumber);
            break;

        case "-":
            substract(firstnumber, secondnumber);
            break;

        case "*":
            multiply(firstnumber, secondnumber);
            break;

        case "/":
            divide(firstnumber, secondnumber);
            break;
    
        default:
            prompt("Error!");
            break;
    }
}

Array.from(btns).forEach(button => {
    button.addEventListener('click', function() {
        if (display.textContent === "0") {
            display.textContent = this.id;
        } else {
            if (this.id !== ".") {
                display.textContent += this.id;
            } else {
                if (display.textContent.includes(".")) {
                    console.log("error, punto puesto");
                } else {
                    display.textContent += this.id;
                }
            }
        }
    });
});