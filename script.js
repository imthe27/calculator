let firstnumber = "";
let first = "";
let secondnumber = "";
let second = "";
let operator = "";
let result = "";
const display = document.getElementById("display");
const btns = document.querySelectorAll(".numbers");
const ops = document.querySelectorAll(".operators");
const total = document.getElementById("res");
const clear = document.getElementById("clear");

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
            display.textContent = result.toString();
            break;

        case "-":
            substract(firstnumber, secondnumber);
            display.textContent = result.toString();
            break;

        case "*":
            multiply(firstnumber, secondnumber);
            display.textContent = result.toString();
            break;

        case "/":
            divide(firstnumber, secondnumber);
            display.textContent = result.toString();
            break;
    
        default:
            prompt("Error!");
            break;
    }
}

Array.from(btns).forEach(button => {
    button.addEventListener("click", function() {
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

Array.from(ops).forEach(op => {
    op.addEventListener("click", function() {
        firstnumber = display.textContent;
        operator = this.id;
        display.textContent = "0";
    });
});

total.addEventListener("click", function() {
    secondnumber = display.textContent;
    firstnumber = Number(firstnumber);
    secondnumber = Number(secondnumber);
    operate(firstnumber, secondnumber, operator);
});

clear.addEventListener("click", function() {
    display.textContent = "0";
    result = "0";
})