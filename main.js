var firstNumber = "";
var operator = "";
var secondNumber="";
var displayValue = "";



function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


function operate(operator,firstNumber,secondNumber){

    a=parseFloat(firstNumber);
    b=parseFloat(secondNumber);

    switch (operator) {
        case "+":    
           return add( a,b );
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return "Error!";
    }

    
}

function updateDisplay(){
    document.getElementById("displayPanel").textContent=displayValue;
}

