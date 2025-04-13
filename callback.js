/*hello(wait);

    function hello(callback) {
       console.log("Hello!");
       callback();
    }

    function wait() {
       console.log("Wait!");
    }
    
    function leave() {
        console.log("Leave!");
    }

    function goodybye() {
       console.log("Goodbye!");
    }*/
sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}