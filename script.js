let firstnumber = 0;
let secondnumber = 0;
let operator = "";
let result = 0;

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