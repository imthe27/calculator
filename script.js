let firstnumber = "";
let secondnumber = "";
let operator = "";
let result = "";
let vartodis = "";
const body = document.querySelector("body");
const display = document.getElementById("display");
const btns = document.querySelectorAll(".numbers");
const ops = document.querySelectorAll(".operators");
const total = document.getElementById("res");
const clear = document.getElementById("clear");
const back = document.getElementById("back");

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

function addDigToDis(e) {
    if (e !== ".") {
        vartodis += e;
    } else {
        if (vartodis.includes(".")) {
            console.log("error, punto puesto")
        } else {
            vartodis += this.id;
        }
    }
    display.textContent = vartodis;
}

function assignOp(e) {
    if (!firstnumber) {
        firstnumber = vartodis;
        operator = e;
        vartodis = "";
    } else {
        secondnumber = vartodis;
        firstnumber = Number(firstnumber);
        secondnumber = Number(secondnumber);
        operate(firstnumber, secondnumber, operator);
        display.textContent = result;
        firstnumber = result;
        operator = e;
        vartodis = "";
    }
}

function showTotal() {
    secondnumber = display.textContent;
    firstnumber = Number(firstnumber);
    secondnumber = Number(secondnumber);
    operate(firstnumber, secondnumber, operator);
    if (vartodis === "") {
        display.textContent = "0";
    } else {
        display.textContent = vartodis;
    }
    vartodis = "";
}

function delOne() {
    vartodis = vartodis.slice(0, -1);
    display.textContent = vartodis;
}

Array.from(btns).forEach(button => {
    button.addEventListener("click", function() {
        addDigToDis(this.id);
    });
});

Array.from(ops).forEach(op => {
    op.addEventListener("click", function() {
        assignOp(this.id);
    });
});

total.addEventListener("click", showTotal);

clear.addEventListener("click", clearUp);

back.addEventListener("click", delOne);

body.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "0":
            addDigToDis("0");
            break;

        case "1":
            addDigToDis("1");
            break;

        case "2":
            addDigToDis("2");
            break;
    
        case "3":
            addDigToDis("3");
            break;

        case "4":
            addDigToDis("4");
            break;

        case "5":
            addDigToDis("5");
            break;

        case "6":
            addDigToDis("6");
            break;
    
        case "7":
            addDigToDis("7");
            break;

        case "8":
            addDigToDis("8");
            break;

        case "9":
            addDigToDis("9");
            break;
    
        case ".":
            addDigToDis(".");
            break;

        case "+":
            assignOp("+");
            break;

        case "-":
            assignOp("-");
            break;

        case "*":
            assignOp("*");
            break;
    
        case "/":
            assignOp("/");
            break;

        case "%":
            assignOp("%");
            break;

        case "Backspace":
            delOne();
            break;
    
        case "Delete":
            clearUp();
            break;

        case "Enter":
            showTotal();
            break;

        default:
            break;
    }
})