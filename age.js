const myText = document.getElementById("idade");
const resultElement = document.getElementById("resultado");

checarBtn.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){
       resultElement.textContent = "Você é bastante velho para este site";
    }else if(age == 0){
        resultElement.textContent = "Você nem existe ainda";
    }else if(age >= 18){
        resultElement.textContent = "Este site se agrada da tua idade.";
    }else if(age < 0) {
       resultElement.textContent = "Vá se ferrar!!!";
    }else {
        resultElement.textContent = "Você deve ter mais de 18 anos para entrar neste site.";
    }
}