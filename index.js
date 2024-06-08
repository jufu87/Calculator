const container = document.querySelector("container");
const resultDisplay = document.querySelector("#result");
const equalsBtn = document.querySelector("#btn-equals")
let btns = document.querySelectorAll('button');

let num1 = 0;
let operator = "";
let newOperator = "";
let num2 = 0;
let displayValue1 = "default";
let displayValue2 = "";
let tempDisplayValue = "";
let calculationResult = 0;

resultDisplay.setAttribute("value", displayValue1 + operator + displayValue2);
const operatorValues = ["+", "-", "*", "/"];

btns.forEach(function (button) {
    button.addEventListener('click', function () {

        if (displayValue1 === "default") {
            displayValue1 = "";
        };

      

        if (button.id === "btn-clear") {
            console.log(`button clicked ${button.id}`);

            clear(num1, num2);
            return;
        }

        if (button.id === "btn-equals") {
            console.log(`button clicked ${button.id}`);
            num2 = parseInt(displayValue2)
            operate(num1, num2);
            return;
        }

        if (operatorValues.includes(button.textContent)) {

            if (operator.length > 0 && displayValue2.length > 0) {
                console.log(`if this shows, call equals function ${button.textContent}`);
                newOperator = button.textContent;
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
        
    });
});

let operatorFunction = function (lastButtonPressed) {

    console.log(`operator pressed: ${lastButtonPressed}`);


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

    num1 = parseInt(displayValue1);


    console.log(displayValue1);
    return;
}

let updateDisplay = function (lastButtonPressed) {

    if (tempDisplayValue === "reset display") {
        num1 = null;
        displayValue1 = "";
        tempDisplayValue = "";
        resultDisplay.setAttribute("value", "");
    };

    displayValue1 += lastButtonPressed;
    console.log(`LastButtonPressed: ${lastButtonPressed}`);
    resultDisplay.setAttribute("value", displayValue1 + operator + displayValue2);

    if (displayValue1 === "default") {
        displayValue1 = "";
    };

    return;
};

let updateDisplay2 = function (lastButtonPressed) {
    displayValue2 += lastButtonPressed
    console.log(`LastButtonPressed: ${lastButtonPressed}`);
    resultDisplay.setAttribute("value", displayValue1 + operator + displayValue2);
    return;
}


// -----------------------------------------------

const add = function (n1, n2) {
    console.log(n1 + n2);
    calculationResult = n1 + n2;
};

const subtract = function (n1, n2) {
    console.log(n1 - n2);
    calculationResult = n1 - n2;
};

const multiply = function (n1, n2) {
    console.log(n1 * n2);
    calculationResult = n1 * n2;
}

const divide = function (n1, n2) {
    console.log(n1 / n2);
    calculationResult = n1 / n2;
}

const operate = function (n1, n2) {

    if (operator === "+") {
        add(n1, n2);
    } else if (operator === "-") {
        subtract(n1, n2);
    } else if (operator === "*") {
        multiply(n1, n2);
    } else if (operator === "/") {
        divide(n1, n2);
    };

   

    
    num2 = null;
    operator = newOperator;
    displayValue1 = calculationResult;
    displayValue2 = "";

    // resultDisplay.setAttribute("value", calculationResult);
    resultDisplay.setAttribute("value", calculationResult + newOperator);
    if (operatorValues.includes(resultDisplay.value.charAt(resultDisplay.value.length-1))) { 
        // if any char in operatorValues includes the final character of the display, then execute following code:
        // not very readable, may need better solution later
        console.log(`this will set num1 = calculationResult ${resultDisplay.value}`);
        num1 = calculationResult;
    } else {
        tempDisplayValue = "reset display";
        console.log(`this will set tempDisplayValue to "${tempDisplayValue}"`);
        num1 = calculationResult;
    }
    newOperator = "";
    return;
};

const clear = function () {
    num1 = 0;
    num2 = 0;
    operator = "";
    displayValue1 = "";
    displayValue2 = "";
    tempDisplayValue = ""
    calculationResult = 0;
    resultDisplay.setAttribute("value", "");
    return;
}

