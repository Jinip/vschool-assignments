var goomVal = 5;
var bombVal = 7;
var cheepVal = 11;

var goomTotal = 12;
var bombTotal = 8;
var cheepTotal = 5;

var adds = document.getElementsByClassName("add");
var subtracts = document.getElementsByClassName("subtract")

for (var i = 0; i < adds.length; i++){
    adds[i].addEventListener("click", add);
    subtracts[i].addEventListener("click", subtract);
}

updateTally();

function add(){
    var baddie = this.parentElement.children[1].innerHTML.toString();
    
    if (baddie === "Goomba"){
        goomTotal++;
    } else if(baddie === "Bob Omb"){
        bombTotal++;
    } else {
        cheepTotal++;
    }
    updateTally();
}

function subtract(){
    var baddie = this.parentElement.children[1].innerHTML.toString();
    if (baddie === "Goomba"){
        if (goomTotal > 0){
            goomTotal--;
        }
    } else if(baddie === "Bob Omb"){
        if (bombTotal > 0){
            bombTotal--;
        }
    } else {
        if (cheepTotal > 0){
            cheepTotal--;
        }
    }
    updateTally();
}

function updateTally(){
    var goomBill = goomTotal * goomVal;
    var bombBill = bombTotal * bombVal;
    var cheepBill = cheepTotal * cheepVal;
    
    var grandTotal = goomBill + bombBill + cheepBill;
    var totalBaddies = goomTotal + bombTotal + cheepTotal;
    
    document.getElementById("goomTally").innerHTML = goomTotal;
    document.getElementById("goomTallyXS").innerHTML = goomTotal;
    
    document.getElementById("bombTally").innerHTML = bombTotal;
    document.getElementById("bombTallyXS").innerHTML = bombTotal;
    
    document.getElementById("cheepTally").innerHTML = cheepTotal;
    document.getElementById("cheepTallyXS").innerHTML = cheepTotal;
    
    document.getElementById("peachTally").innerHTML = totalBaddies;
    document.getElementById("bill").innerHTML = grandTotal;
}