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
const operatorValues = ["+", "-", "*", "/"];

btns.forEach(function (button) {
    button.addEventListener('click', function() {
        if (resultDisplay.value === "default") {
            resultDisplay.value = "";
        };

        // store the value of the button into the num variable
        // find a way to store the second and third button click in new variables
      
        // when button is clicked, display the button's value in display and store it in new variable
        // if variable already has value, store in next variable?
        updateDisplay(button.textContent);
    });
});


let updateDisplay = function(buttonValue) {
    console.log(buttonValue);
  
    
    if (operatorValues.includes(buttonValue)) {
        console.log("includes works");
        num1 = displayValue;
        console.log("operator pressed");
        console.log(resultDisplay.value); // if resultDisplay.value includes same operator, then run appropriate math function,
                                          // passing same variable twice.
       
        if (resultDisplay.value.includes(buttonValue)) {
            console.log("same operator twice");
        };
        
    };

    // if(buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
        
    // };   // old


    resultDisplay.value += buttonValue; // need to concat the buttons pressed
    displayValue = parseInt(resultDisplay.value);
    console.log(displayValue);
    return buttonValue;
}; //to run the resultDisplay.value and displayValue methods in if possible




// -----------------------------------------------





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