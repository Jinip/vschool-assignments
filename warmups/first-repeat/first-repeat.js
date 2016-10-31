function noRepeat(str){
    var repeatedChars = [];
    for (var i = 0; i < str.length; i++){
        console.log("i = " + str[i]);
        if (repeatedChars.indexOf(str[i]) === -1){
            for (var j = i + 1; j < str.length; j++){
                console.log("j = " + str[j]);
                if (str[i] === str[j]){
                    repeatedChars.push(str[i]);
                    break;
                }
            }
        }
        if (repeatedChars.indexOf(str[i]) === -1){
            return str[i];
        }
    }
}

console.log(noRepeat("ggggggggxkklllllljjfvvvlsjksifg"));