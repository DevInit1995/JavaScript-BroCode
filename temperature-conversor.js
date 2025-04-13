const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const btnConverte = document.getElementById("btnConverte");
let temp;

btnConverte.onclick = function(){
    debugger;
    desabilita();
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }else {
        result.textContent = "Select a unit";
    }
}

function desabilita(){
    const radios = document.querySelectorAll('input[type="radio"]');
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCelsius");

    radios.forEach(radio => {
        if(toCelsius.checked) {
            //document.getElementById("toCelsius").disabled = true;
            document.getElementById("toFahrenheit").disabled = true;
        }
        else if(toFahrenheit.checked){
            document.getElementById("toCelsius").disabled = true;
            //document.getElementById("toFahrenheit").disabled = true;
        }
        //else if(radio.)
    });
}
