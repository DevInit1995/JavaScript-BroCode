//create the element
const newListItem = document.createElement("li");

//add attributes/properties
newListItem.textContent= "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";


//append element to dom
//document.body.append(newListItem);
//document.body.prepend(newListItem);
//document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);

const apple = document.getElementById("apple");
document.getElementById("fruits").insertBefore(newListItem, apple);

