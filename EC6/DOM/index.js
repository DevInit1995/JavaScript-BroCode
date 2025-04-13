/*const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.log(document);*/

//1. document.getElementById() // element or null
//2. document.getElementClassName() // html collection
//3. document.getElementByTagName() // html collection
//4. document.querySelector() // element or null
//5. document.querySelectorAll() // nodeList

/*const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor= "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);*/

//const fruits = document.getElementsByClassName("fruits");
//fruits[2].style.backgroundColor = "yellow";

/*Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});*/

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

/*for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}*/

/*Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});*/

/*const element = document.querySelector("ul");
element.style.backgroundColor = "red";*/

/*const foods = document.querySelectorAll("li");
foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});*/

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//.firstElementChild
/*const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";*/

/*const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});*/

//.lastElementChild
/*const element = document.getElementById("desserts");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";*/

/*const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});*/

//.nextElementSibling
/*const element = document.getElementById("vegetables");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";*/

/*//.previousElementSibling
const element = document.getElementById("desserts");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";*/

/*//.parentElement 
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";*/

//.children
const element = document.getElementById("desserts");
const children = element.children;
children[1].style.backgroundColor = "yellow";