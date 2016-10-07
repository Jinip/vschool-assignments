function printString(str){
    var str = str || prompt("write a string: ");
    
    for (var i = 0; i < str.length; i++){
        console.log(str[i]);
    }
}

function findChar(str, char){
    var str = str || prompt("write a string: ");
    var char = char || prompt("write a character to find: ");
    
    for (var i = 0; i < str.length; i++){
        if (str[i] === char) return i;
    }
    
    return console.log("character not found");    
}

function inputFourtyTwo(){
    var input;
    
    while(input !== "42"){
        input = prompt("please enter 42: ");
    }
}

function lowestOfTen(){
    var lowest;
    var num;
    
    for (var i = 0; i < 10; i++){
        num = prompt("Please input a number: ")
        if (i === 0 || num < lowest) lowest = num;
    }
    
    console.log(lowest);
}