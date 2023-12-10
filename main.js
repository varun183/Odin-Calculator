var operator = "";
var previousvalue = "";
var currentValue = "";



var clear = document.querySelector("#clear-button");
var equal = document.querySelector("#equal-button");
var decimal = document.querySelector("#decimal-button");

var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");

var previousScreen = document.querySelector(".previous");
var currentScreen = document.querySelector(".current");


numbers.forEach((number)=>number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;

}))

operators.forEach((op)=> op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousvalue + " " + operator;
    currentScreen.textContent = currentValue;

}))

clear.addEventListener("click",function(){
    previousvalue = "";
    currentValue = "";
    operator = "";
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
})

equal.addEventListener("click", function(){

    if(currentValue!="" && previousvalue!=""){
        calculate()
        previousScreen.textContent = "";

        
        currentScreen.textContent = previousvalue;
        
    }
})


decimal.addEventListener("click",function(){
    addDecimal();
})

function handleNumber(num){
    if(num.length<=6)
     currentValue +=num;
}

function handleOperator(op){
    console.log(op)
    operator = op;
    previousvalue=currentValue;
    currentValue="";

}

function calculate(){
    previousvalue = Number(previousvalue);
    currentValue = Number(currentValue);

    if(operator==="+"){
        previousvalue +=currentValue;
    }else if(operator==="-"){
        previousvalue -=currentValue;
    }else if(operator==="x"){
        previousvalue *= currentValue;
    }else{
        previousvalue/=currentValue;
    }

    previousvalue =  roundNumber(previousvalue);

    previousvalue = previousvalue.toString();
    currentValue = previousvalue.toString();

}

function roundNumber(num){
    return Math.round(num*1000)/1000;
}

function addDecimal(){

    if(!currentValue.includes(".")){
        currentValue +=".";
    }

}