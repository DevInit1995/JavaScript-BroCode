/*classList = Propriedade de elemento em JavaScript usada para interagir
com a lista de classes de um elemento (classes CSS) Permite que você crie classes reutilizáveis
Permite que você crie classes reutilizáveis ​​para muitos elementos em sua página da web.*/

// add()
// remove()
//toggle(remove if present, add if not)
// replace(oldClass, newClass)
// contains()

//const myButton = document.getElementById("myButton");

/*myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});*/

/*const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

myH1.classList.add("enabled");
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬​";
    }else{
        event.target.classList.replace("enabled", "disabled");
    }
});

myH1.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬​";
    }else{
        event.target.classList.replace("enabled", "disabled");
    }
});*/

let buttons = document.querySelectorAll(".myButton");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬​";
        }else {
        event.target.classList.replace("enabled", "disabled");
        }
    });
});