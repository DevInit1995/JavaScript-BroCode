//let buttons = document.querySelectorAll(".myButtons");

//add html/css properties
/*buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😁​";
});*/

//mouseover + mouseout event listener
/*buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});*/

//add an element
/*const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

console.log(buttons);*/

let buttons = document.querySelectorAll(".myButtons");
//remove an element

buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.remove();
        console.log(buttons);
    });
});