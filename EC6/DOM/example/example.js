//create the element
const newH1 = document.createElement("h1");

//add attributes/properties
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//append element to dom
//document.body.append(newH1);
//document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);

/*const box3 = document.getElementById("box3");
document.body.insertBefore(newH1, box3);*/

/*const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[1]);*/

//remove html element
document.getElementById("box1").removeChild(newH1);