const display = document.getElementById("display");

function appendToDisplay(input){
    debugger;
    display.value += input;
}

function clearDisplay(){
    debugger
    display.value = "";
}

function calculate(){   
    debugger
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error. B.O!";
    }
}