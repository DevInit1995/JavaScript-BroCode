const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResulta = document.getElementById("subResulta");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckBox.checked){
        subResulta.textContent = `Você está inscrito!`;
        
        if(visaBtn.checked){
            paymentResult.textContent = `Você vai pagar com o Visa`;
        } else if(masterCardBtn.checked){
            paymentResult.textContent = `Você vai pagar com o MasterCard`;
        }else if(payPalBtn.checked){
            paymentResult.textContent = `Você vai pagar com o PayPal`;
        }
    }else{
        subResulta.textContent = `Você NÃO está inscrito mother*#cker!`
        paymentResult.textContent = "";
    }
}