/*eventListener = Ouça eventos específicos para criar páginas da web interativas
eventos: clique, mouseover, mouseout .addEventLIstener(event, callback)*/
/*const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor ="tomato"
    myBox.textContent = "OUCH! 🤕​";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😯​";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Clique me 😲​";
});*/

/*
eventListener = Ouça eventos específicos para criar páginas da web interativas events: keydown, keyup document.addEventListener(event, callback);
*/

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightblue";
});

const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){

        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

