document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("subtractBtn").addEventListener("click", subtract);
document.getElementById("multiplyBtn").addEventListener("click", multiply);

var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("click", clear);
}

function add(){
    var add1 = document.getElementById("add1");
    var add2 = document.getElementById("add2");
    
    add2.value = parseInt(add1.value) + parseInt(add2.value);
    add1.value = "";
}

function subtract(){
    var subtract1 = document.getElementById("subtract1");
    var subtract2 = document.getElementById("subtract2");
    
    subtract2.value = parseInt(subtract1.value) - parseInt(subtract2.value);
    subtract1.value = "";
}

function multiply(){
    var multiply1 = document.getElementById("multiply1");
    var add2 = document.getElementById("multiply2");
    
    multiply2.value = parseInt(multiply1.value) * parseInt(multiply2.value);
    multiply1.value = "";
}

function clear(){
    this.value = "";
}