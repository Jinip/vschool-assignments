function lower(){
    var numOne = prompt("First number: ")
    var numTwo = prompt("Second number: ")
    
    if (numOne < numTwo){
        console.log(numOne);
    }
    else if (numTwo < numOne){
        console.log(numTwo);
    }
    else{
        console.log("They are equal!")
    }
}

function monkeyTrouble(aSmile, bSmile){
    return (aSmile && bSmile) || (!aSmile && !bSmile) ? true : false;
}

function timeGreeting(){
    var time = new Date();
    time = time.getHours();
    
    if (time < 12){
        console.log("Good Morning!");
    }
    else if(time <= 18) {
        console.log("Good Afternoon!");
    }
    else {
        console.log("Good Evening!");
    }
}