var readline = require("readline-sync");

function addWord(dict){
    while(true){
        var newWord = readline.question("New word: ")
        newWord = newWord.toLowerCase();
        if (newWord === ""){
            if (readline.keyInYN("No new word detected. Do you wish to skip? (y/n)")){
                console.log("Skipped adding new word.");
                return;
            } else {
                continue;
            } 
        } else if (dict[newWord]){
            console.log("Sorry, you've already defined that word!")
            continue;
        } else {
            break;
        }
    }
    while(true){
        newDef = readline.question("Definition: ");
        if (newDef === ""){
            if (readline.keyInYN("No new definition detected. Do you wish to skip? (y/n)")){
                console.log("Skipped adding new word.");
                return;
            } else {
                continue;
            } 
        } else {
            break;
        }
    }
    dict[newWord] = newDef;
    
    console.log("Added the following to the dictionary! -- " + newWord + ": \"" + newDef + "\"");
}

function lookUp(dict){
    var curWords = [];
    for (word in dict){
        curWords.push(word);
    }
    var options = ["Search by word", "Print current dictionary"]
    
    var response = readline.keyInSelect(options)
    
    if (response === 0){
        while(true){
            var search = readline.question("Word to look up: ")
            search = search.toLowerCase();
            if (search === ""){
                if (readline.keyInYN("No search detected. Do you wish to skip? (y/n)")){
                    console.log("Skipped looking up word.");
                    return;
                } else {
                    continue;
                } 
            } else if (dict[search]){
                console.log(search + ": " + dict[search]);
                return;
            } else {
                console.log("That word is not defined in your dictionary.")
                continue;
            }
        }
    } else {
        index = readline.keyInSelect(curWords);
        console.log(curWords[index] + ": " + dict[curWords[index]]);
        return;
    }
}

function main(){
    var response = "";
    var options = ["Add to dictionary", "Look up word"]
    var dictionary = {};
    while(true){
        var response = readline.keyInSelect(options)
        if (response === 0){
            addWord(dictionary);
        } else if (response === 1){
            lookUp(dictionary);
        } else {
            return;
        }
    }
}

main();