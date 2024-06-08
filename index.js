const container = document.querySelector("container");
const resultDisplay = document.querySelector("#result");
let btns = document.querySelectorAll('button');

let num1;
let operator = "";
let num2;
let displayValue1 = "default";
let displayValue2 = "";
console.log(resultDisplay);
resultDisplay.setAttribute("value", displayValue1 + operator + displayValue2);
const operatorValues = ["+", "-", "*", "/"];

// any changes to displayValue or operator has no effect on the HTML input value.



btns.forEach(function (button) {
    button.addEventListener('click', function () {
        if (displayValue1 === "default") {
            displayValue1 = "";
        };

        if (operatorValues.includes(button.textContent)) {

            if (operator.length > 0 && displayValue2.length > 0) {
                console.log("if this shows, call equals function");
                return;
            }

            operatorFunction(button.textContent);
            return;

        } else {

            if (operator.length > 0) {
                console.log(`if operator has a value then don't call updateDisplay ${operator}`);
                updateDisplay2(button.textContent);
                return;
            };

            updateDisplay(button.textContent);
            return;
        }
        // store the value of the button into the num variable
        // find a way to store the second and third button click in new variables

        // when button is clicked, display the button's value in display and store it in new variable
        // if variable already has value, store in next variable?

    });
});

let operatorFunction = function (lastButtonPressed) {

    console.log(`operator pressed: ${lastButtonPressed}`);


    // displayValue1 = operator;

    if (operatorValues.includes(operator)) {
        if (operator === lastButtonPressed) {
            console.log("same exact operator twice, call the equals function");
        }

        operator = lastButtonPressed;
        resultDisplay.setAttribute("value", displayValue1 + operator + displayValue2);

        console.log("an operator was already pressed");
        console.log();

    } else {
        operator = lastButtonPressed;
        resultDisplay.setAttribute("value", displayValue1 + operator + displayValue2);

    };

    num1 = parseInt(displayValue1); // could do: if num1 === undefined then store new number in num2


    console.log(displayValue1);
    return;
}

let updateDisplay = function (lastButtonPressed) {
    displayValue1 += lastButtonPressed;
    console.log(`LastButtonPressed: ${lastButtonPressed}`);
    resultDisplay.setAttribute("value", displayValue1 + operator + displayValue2);

    if (displayValue1 === "default") {
        displayValue1 = "";
    };

    // need to concat the buttons pressed
    // console.log("last character of resultDisplay: ");
    // console.log(displayValue1.charAt(displayValue1.length-1)); 


    // console.log(displayValue1);
    return;
}; //to run the displayValue1 and displayValue1 methods in if possible


let updateDisplay2 = function (lastButtonPressed) {
    displayValue2 += lastButtonPressed
    console.log(`LastButtonPressed: ${lastButtonPressed}`);
    resultDisplay.setAttribute("value", displayValue1 + operator + displayValue2);
    return;
}


// -----------------------------------------------



// const add = function(num1, num2) {
//     return num1 + num2;
// };

// const subtract = function(num1, num2) {
//     return num1 - num2;
// };

// const multiply = function(num1, num2) {
//     return num1 * num2;
// }

// const divide = function(num1, num2) {
//     return num1 / num2;
// }


// const operate = function(num1, operator, num2) {
//     // console.log(num1, operator, num2);
//     if (operator === "+") {
//         console.log(add(num1, num2));
//     } else if (operator === "-") {
//         console.log(subtract(num1, num2));
//     } else if (operator === "*") {
//         console.log(multiply(num1,num2));
//     } else if (operator === "/") {
//         console.log(divide(num1, num2));
//     } else {
//         return;
//     }
// };

// //divide();
// operate(num1, operator, num2);