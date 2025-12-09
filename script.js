let firstnumber = "";
let secondnumber = "";
let operator = "";
let result = "";
let vartodis = "";
const display = document.getElementById("display");
const btns = document.querySelectorAll(".numbers");
const ops = document.querySelectorAll(".operators");
const total = document.getElementById("res");
const clear = document.getElementById("clear");

function add(firstnumber, secondnumber) {
    result = firstnumber + secondnumber;
    result = result.toFixed(2);
}

function substract(firstnumber, secondnumber) {
    result = firstnumber - secondnumber;
    result = result.toFixed(2);    
}

function multiply(firstnumber, secondnumber) {
    result = firstnumber * secondnumber;
    result = result.toFixed(2);
}

function divide(firstnumber, secondnumber) {
    result = firstnumber / secondnumber;
    result = result.toFixed(2);
}

function clearUp() {
    result = "";
    firstnumber = "";
    secondnumber = "";
    vartodis = "";
    display.textContent = "0";
}

function operate(firstnumber, secondnumber, operator) {
    switch (operator) {
        case "+":
            add(firstnumber, secondnumber);
            vartodis = result.toString();
            break;

        case "-":
            substract(firstnumber, secondnumber);
            vartodis = result.toString();
            break;

        case "*":
            multiply(firstnumber, secondnumber);
            vartodis = result.toString();
            break;

        case "/":
            if (firstnumber === 0 || secondnumber === 0) {
                alert("no...\njust no.");
                clearUp();
            } else {
                divide(firstnumber, secondnumber);
                vartodis = result.toString();
            }
            break;
    
        default:
            alert("Error!");
            break;
    }
}

Array.from(btns).forEach(button => {
    button.addEventListener("click", function() {
        if (this.id !== ".") {
            vartodis += this.id;
        } else {
            if (vartodis.includes(".")) {
                console.log("error, punto puesto");
            } else {
                vartodis += this.id;
            }
        }
        display.textContent = vartodis;
    });
});

Array.from(ops).forEach(op => {
    op.addEventListener("click", function() {
        if (!firstnumber) {
            firstnumber = vartodis;
            operator = this.id;
            vartodis = "";
        } else {
            secondnumber = vartodis;
            firstnumber = Number(firstnumber);
            secondnumber = Number(secondnumber);
            operate(firstnumber, secondnumber, operator);
            display.textContent = result;
            firstnumber = result;
            operator = this.id;
            vartodis = "";
        }
    });
});

total.addEventListener("click", function() {
    secondnumber = display.textContent;
    firstnumber = Number(firstnumber);
    secondnumber = Number(secondnumber);
    operate(firstnumber, secondnumber, operator);
    if (vartodis === "") {
        display.textContent = "0";
    } else {
        display.textContent = vartodis;
    }
});

clear.addEventListener("click", clearUp);