const container = document.querySelector("container");
const resultDisplay = document.querySelector("#result");
const equalsBtn = document.querySelector("#btn-equals")
let btns = document.querySelectorAll('button');

let num1;
let operator = "";
let num2;
let displayValue1 = "default";
let displayValue2 = "";
let calculationResult = 0;
console.log(resultDisplay);
resultDisplay.setAttribute("value", displayValue1 + operator + displayValue2);
const operatorValues = ["+", "-", "*", "/"];

// any changes to displayValue or operator has no effect on the HTML input value.



btns.forEach(function (button) {
    button.addEventListener('click', function () {
        
        if (displayValue1 === "default") {
            displayValue1 = "";
        };

        if (button.id === "btn-equals") {
            console.log(`button clicked ${button.id}`);
            num2 = parseInt(displayValue2)
            operate(num1, num2);
            return;
        }

        if (operatorValues.includes(button.textContent)) {

            if (operator.length > 0 && displayValue2.length > 0) {
                console.log("if this shows, call equals function");
                num2 = parseInt(displayValue2)
                operate(num1, num2);
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
            console.log("same exact operator twice in a row, call the equals function");
            num2 = num1;
            operate(num1, num2);
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



const add = function(num1, num2) {
    console.log(num1 + num2);
    calculationResult = num1 + num2;
};

const subtract = function(num1, num2) {
    console.log(num1 - num2);
    calculationResult = num1 - num2;
};

const multiply = function(num1, num2) {
    console.log(num1 * num2);
    calculationResult = num1 * num2;
}

const divide = function(num1, num2) {
    console.log(num1 / num2);
    calculationResult = num1 / num2;
}


const operate = function(num1, num2) {
    // console.log(num1, operator, num2);
    if (operator === "+") {
        add(num1, num2);
    } else if (operator === "-") {
        subtract(num1, num2);
    } else if (operator === "*") {
        multiply(num1, num2);
        
    } else if (operator === "/") {
        divide(num1, num2);
    };

    
    num1 = calculationResult; // 
    num2 = 0;
    displayValue1 = calculationResult;
    displayValue2 = "";
    
    resultDisplay.setAttribute("value", calculationResult);
    return;
};

const clear = function() {
    num1 = 0;
    num2 = 0;
    displayValue1 = "";
    displayValue2 = "";
    resultDisplay.setAttribute("value", "");
}

// //divide();
// operate(num1, operator, num2);