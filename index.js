let num1 = 20;
let operator = "*";
let num2 = 4;

const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}


const operate = function(num1, operator, num2) {
    // console.log(num1, operator, num2);
    if (operator === "+") {
        console.log(add(num1, num2));
    } else if (operator === "-") {
        console.log(subtract(num1, num2));
    } else if (operator === "*") {
        console.log(multiply(num1,num2));
    } else if (operator === "/") {
        console.log(divide(num1, num2));
    } else {
        return;
    }
};

//divide();
operate(num1, operator, num2);