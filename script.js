let operands = [];
let displayValue = "";
let operator = "";
let left = null;
let right = null;
let isDotSelectedLeft = false;
let isDotSelectedRight = false;

const displayValuePara = document.querySelector("#displayValue");
displayValuePara.textContent = "0";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        switch (button.id) {
            case "0":
                changeDisplayValue("0");
                break;
            case "1":
                changeDisplayValue("1");
                break;
            case "2":
                changeDisplayValue("2");
                break;
            case "3":
                changeDisplayValue("3");
                break;
            case "4":
                changeDisplayValue("4");
                break;
            case "5":
                changeDisplayValue("5");
                break;
            case "6":
                changeDisplayValue("6");
                break;
            case "7":
                changeDisplayValue("7");
                break;
            case "8":
                changeDisplayValue("8");
                break;
            case "9":
                changeDisplayValue("9");
                break;
            case "+":
                if (left == null && right == null) {
                    alert("Cannot enter operator without operands!");
                    break;
                }

                if (left != null && right != null) {
                    let result = operate(operator, left, right);
                    operator = "+";
                    console.log(result);
                    right = null;
                    left = result;
                    displayValue = result.toFixed(2);
                    const displayValuePara = document.querySelector("#displayValue");
                    displayValuePara.textContent = displayValue;
                    changeTextAboveDisplayValue("+");
                    displayValue = "";
                }
                else {
                    operator = "+";
                    changeTextAboveDisplayValue("+");
                    displayValue = "";
                }
            
                break;
            case "-":
                if (left == null && right == null) {
                    alert("Cannot enter operator without operands!");
                    break;
                }

                if (left != null && right != null) {
                    let result = operate(operator, left, right);
                    operator = "-";
                    right = null;
                    left = result;
                    displayValue = result.toFixed(2);
                    const displayValuePara = document.querySelector("#displayValue");
                    displayValuePara.textContent = displayValue;
                    changeTextAboveDisplayValue("-");
                    displayValue = "";
                }
                else {
                    operator = "-";
                    changeTextAboveDisplayValue("-");
                    displayValue = "";
                }
                break;
            case "x":
                if (left == null && right == null) {
                    alert("Cannot enter operator without operands!");
                    break;
                }

                if (left != null && right != null) {
                    let result = operate(operator, left, right);
                    operator = "x";
                    console.log(result);
                    right = null;
                    left = result;
                    displayValue = result.toFixed(2);
                    const displayValuePara = document.querySelector("#displayValue");
                    displayValuePara.textContent = displayValue;
                    changeTextAboveDisplayValue("x");
                    displayValue = "";
                }
                else {
                    operator = "x";
                    changeTextAboveDisplayValue("x");
                    displayValue = "";
                }
            
                break;
            case "/":
                if (left == null && right == null) {
                    alert("Cannot enter operator without operands!");
                    break;
                }

                if (right != 0) {
                    if (left != null && right != null) {
                        let result = operate(operator, left, right);
                        operator = "/";
                        console.log(result);
                        right = null;
                        left = result;
                        displayValue = result.toFixed(2);
                        const displayValuePara = document.querySelector("#displayValue");
                        displayValuePara.textContent = displayValue;
                        changeTextAboveDisplayValue("/");
                        displayValue = "";
                    }
                    else {
                        operator = "/";
                        changeTextAboveDisplayValue("/");
                        displayValue = "";
                    }
                }
                else {
                    alert("Division by 0 is not allowed!");
                }
            
                break;
            case "equals":
                if (left != null && right != null) {
                    if (operator == "/" && right == 0) {
                        alert("Division by 0 is not allowed!");
                    }
                    else {
                        let result = operate(operator, left, right);
                        const abovePara = document.querySelector("#above");
                        abovePara.textContent = `${left} ${operator} ${right} = ${result.toFixed(2)}`;
                        right = null;
                        left = result;
                        displayValue = result.toFixed(2);
                        const displayValuePara = document.querySelector("#displayValue");
                        displayValuePara.textContent = displayValue;
                        operator = "";
                    }
                }
                else {
                    alert("Cannot enter equals operator without two operands!");
                }

                break;
            case ".":
                changeDisplayValue(".");
                break;
            case "clear":
                clear();
                clearTextAboveDisplayValue();
                break;
            case "delete":
                deleteLastSymbol();
                break;
        }
    });
});

window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "0":
            changeDisplayValue("0");
            break;
        case "1":
            changeDisplayValue("1");
            break;
        case "2":
            changeDisplayValue("2");
            break;
        case "3":
            changeDisplayValue("3");
            break;
        case "4":
            changeDisplayValue("4");
            break;
        case "5":
            changeDisplayValue("5");
            break;
        case "6":
            changeDisplayValue("6");
            break;
        case "7":
            changeDisplayValue("7");
            break;
        case "8":
            changeDisplayValue("8");
            break;
        case "9":
            changeDisplayValue("9");
            break;
        case "+":
            if (left == null && right == null) {
                alert("Cannot enter operator without operands!");
                break;
            }

            if (left != null && right != null) {
                let result = operate(operator, left, right);
                operator = "+";
                console.log(result);
                right = null;
                left = result;
                displayValue = result.toFixed(2);
                const displayValuePara = document.querySelector("#displayValue");
                displayValuePara.textContent = displayValue;
                changeTextAboveDisplayValue("+");
                displayValue = "";
            }
            else {
                operator = "+";
                changeTextAboveDisplayValue("+");
                displayValue = "";
            }
        
            break;
        case "-":
            if (left == null && right == null) {
                alert("Cannot enter operator without operands!");
                break;
            }

            if (left != null && right != null) {
                let result = operate(operator, left, right);
                operator = "-";
                right = null;
                left = result;
                displayValue = result.toFixed(2);
                const displayValuePara = document.querySelector("#displayValue");
                displayValuePara.textContent = displayValue;
                changeTextAboveDisplayValue("-");
                displayValue = "";
            }
            else {
                operator = "-";
                changeTextAboveDisplayValue("-");
                displayValue = "";
            }
            break;
        case "x":
            if (left == null && right == null) {
                alert("Cannot enter operator without operands!");
                break;
            }

            if (left != null && right != null) {
                let result = operate(operator, left, right);
                operator = "x";
                console.log(result);
                right = null;
                left = result;
                displayValue = result.toFixed(2);
                const displayValuePara = document.querySelector("#displayValue");
                displayValuePara.textContent = displayValue;
                changeTextAboveDisplayValue("x");
                displayValue = "";
            }
            else {
                operator = "x";
                changeTextAboveDisplayValue("x");
                displayValue = "";
            }
        
            break;
        case "/":
            if (left == null && right == null) {
                alert("Cannot enter operator without operands!");
                break;
            }

            if (right != 0) {
                if (left != null && right != null) {
                    let result = operate(operator, left, right);
                    operator = "/";
                    console.log(result);
                    right = null;
                    left = result;
                    displayValue = result.toFixed(2);
                    const displayValuePara = document.querySelector("#displayValue");
                    displayValuePara.textContent = displayValue;
                    changeTextAboveDisplayValue("/");
                    displayValue = "";
                }
                else {
                    operator = "/";
                    changeTextAboveDisplayValue("/");
                    displayValue = "";
                }
            }
            else {
                alert("Division by 0 is not allowed!");
            }
        
            break;
        case "=":
            if (left != null && right != null) {
                if (operator == "/" && right == 0) {
                    alert("Division by 0 is not allowed!");
                }
                else {
                    let result = operate(operator, left, right);
                    const abovePara = document.querySelector("#above");
                    abovePara.textContent = `${left} ${operator} ${right} = ${result.toFixed(2)}`;
                    right = null;
                    left = result;
                    displayValue = result.toFixed(2);
                    const displayValuePara = document.querySelector("#displayValue");
                    displayValuePara.textContent = displayValue;
                    operator = "";
                }
            }
            else {
                alert("Cannot enter equals operator without two operands!");
            }

            break;
        case ".":
            changeDisplayValue(".");
            break;
        case "Delete":
            clear();
            clearTextAboveDisplayValue();
            break;
        case "Backspace":
            deleteLastSymbol();
            break;
    }
});

function add(leftOperand, rightOperand) {
    return +leftOperand + +rightOperand;
}

function subtract(leftOperand, rightOperand) {
    return leftOperand - rightOperand;
}

function multiply(leftOperand, rightOperand) {
    return leftOperand * rightOperand;
}

function divide(leftOperand, rightOperand) {
    if (rightOperand == 0) {
        alert("Division by 0 is invalid!");
        return;
    }

    return leftOperand / rightOperand;
}

function operate(operator, leftOperand, rightOperand) {
    if (operator == "+") {
        return add(leftOperand, rightOperand);
    }
    else if (operator == "-") {
        return subtract(leftOperand, rightOperand);
    }
    else if (operator == "x") {
        return multiply(leftOperand, rightOperand);
    }
    else if (operator == "/") {
        return divide(leftOperand, rightOperand);
    }
}

function changeDisplayValue(newDisplayValue) {
    if (displayValue.length <= 19) {
        if (newDisplayValue == "." && displayValue.includes(".")) {
            alert("Cannot create decimal number with more than 1 dots!");
        }
        else {
            displayValue += newDisplayValue;
            const displayValuePara = document.querySelector("#displayValue");
            displayValuePara.textContent = displayValue;
    
            if (operator != "") {
                if (newDisplayValue == ".") {
                    right = parseFloat(displayValue);
                }
                else {
                    right = Number(displayValue);
                }
            }
            else {
                if (newDisplayValue == ".") {
                    left = parseFloat(displayValue);
                }
                else {
                    left = Number(displayValue);
                }
            }
        }
    }
}

function changeTextAboveDisplayValue(operator) {
    const abovePara = document.querySelector("#above");
    let result = "";
    abovePara.textContent = `${displayValue == "" ? "0" : displayValue} ${operator}`;
}

function clearTextAboveDisplayValue() {
    const abovePara = document.querySelector("#above");
    abovePara.textContent = "";
}

function deleteLastSymbol() {
    let displayValueToArr = displayValue.split("");
    displayValueToArr.pop();
    displayValue = displayValueToArr.join("").toString();
    const displayValuePara = document.querySelector("#displayValue");
    displayValuePara.textContent = displayValue;
}

function clear() {
    displayValue = "";
    operator = "";
    left = null;
    right = null;
    const displayValuePara = document.querySelector("#displayValue");
    displayValuePara.textContent = "0";
}