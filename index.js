const container = document.querySelector("container");
const resultDisplay = document.querySelector("#result");
let btns = document.querySelectorAll('button');
// const btn0 = document.querySelector("#btn-0");
// const btn1 = document.querySelector("#btn-1");
// const btn2 = document.querySelector("#btn-2");
// const btn3 = document.querySelector("#btn-3");
// const btn4 = document.querySelector("#btn-4");
// const btn5 = document.querySelector("#btn-5");
// const btn6 = document.querySelector("#btn-6");
// const btn7 = document.querySelector("#btn-7");
// const btn8 = document.querySelector("#btn-8");
// const btn9 = document.querySelector("#btn-9");
// const btnAdd = document.querySelector("#btn-add");
// const btnSubtract = document.querySelector("#btn-subtract");
// const btnMultiply = document.querySelector("#btn-multiply");
// const btnDivide = document.querySelector("#btn-divide");
// const btnEquals = document.querySelector("#btn-equals");
// const btnClear = document.querySelector("#btn-clear");
let num1;
let operator = "";
let num2;
let displayValue;

// the buttons need to be differentiated between numbers, operators, and = or Clear

// sotre first num variable when operator is clicked.add
// After: when new num is clicked store in second variable with equals button=



btns.forEach(function (i) {
    i.addEventListener('click', function() {
        if (resultDisplay.value === "default") {
            resultDisplay.value = "";
        };
        console.log(i.textContent);
        // this stores the value of the button into the num variable
        // find a way to store the second and third button click in new variables
        num1 = i.textContent;
        console.log(num1);
        // when button is clicked, display the button's value in display and store it in new variable
        // if variable already has value, store in next variable? doesnt work with non-single digit values
        // so instead, if operator variable already has a value, store in new variable
        

      
        updateDisplay(i.textContent)
    });
  });

let updateDisplay = function(i) {

    console.log(i);
    resultDisplay.value += i; // need to concat the buttons pressed
    displayValue = parseInt(i);
    return i;
}; //to run the resultDisplay.value and displayValue methods in if possible

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