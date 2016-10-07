var readFile = require("require-text");

function main(){
    var names = getNames(process.argv[2]);
    
    for (var i = 0; i < names.length; i++){
        attemptToCall(names[i], call, dontCall, sendText);
    }
}

function getNames(args){
    if (args){
        return readFile(args, require).split("/n");
    } else {
        return readFile("./names.txt", require).split("\n");
    }
}

function attemptToCall(name, call, dontCall, sendText){    
    if (aNum(name) >= 2){
        sendText(name);
    } else if (isLengthEven(name)) {
        call(name);
    } else {
        dontCall(name);
    }
}

function aNum(str){
    str = str.toLowerCase().split("");

    return str.filter(returnAs).length;
}

function returnAs(char){
    return char === "a";
}

function isLengthEven(str){
    if (str.length % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function sendText(str){
    console.log("Sending text to " + str);
    
    setTimeout(function(){
        console.log("Sent text to " + str);
    }, 1500);
}

function call(str){
    console.log("Calling " + str);
    
    setTimeout(function(){  
        console.log("Called " + str);
    }, 1500);
    
}

function dontCall(str){
    console.log("Didn't call " + str);
}

main();