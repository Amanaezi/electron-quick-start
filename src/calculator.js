"use strict";

let val1 = 0;
let val2 = 0;
let action = "";
let result = 0;

const setNum = (n) => {
    document.getElementById("num").value = n;
}

const reset = () => {
    val1 = 0;
    val2 = 0;
    action = "";
    result = 0;
    document.getElementById("num").value = 0;
}

const performOperation = (op) => {
    val1 = +document.getElementById("num").value;
    action = op;
}

const calculate = () => {
    val2 = +document.getElementById("num").value;
    switch (action) {
        case "+":
            result = val1 + val2;
            break;
        case "-":
            result = val1 - val2;
            break;
        case "*":
            result = val1 * val2;
            break;
        case "/":
            result = val1 / val2;
            break;
        default:
            result = "Error";
    }
    console.log(result);
    document.getElementById("num").value = result;
}

reset();