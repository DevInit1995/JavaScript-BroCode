const btnDice = document.getElementById("btnDice");
const valor = parseInt(document.getElementById("valor").value, 10);
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

btnDice.onclick = function(){
    debugger;
    const values = [];
    const images = [];

    for(let i = 0; i < valor; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dados_imagens/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}