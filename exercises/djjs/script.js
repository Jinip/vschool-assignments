var boxes = document.getElementsByClassName("box");

for (var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("mouseover", blue);
    boxes[i].addEventListener("mousedown", red);
    boxes[i].addEventListener("mouseup", yellow);
    boxes[i].addEventListener("dblclick", green);
    boxes[i].addEventListener("mouseout", purple);
}

function blue(){
    this.style.backgroundColor = "blue";
}

function red(){
    this.style.backgroundColor = "red";
}

function yellow(){
    this.style.backgroundColor = "yellow";
}

function green(){
    this.style.backgroundColor = "green";
}

function purple(){
    this.style.backgroundColor = "purple";
}


window.addEventListener("scroll", function(){
    var boxes = document.getElementsByClassName("box");
    
    for (var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = "orange";
    }
});