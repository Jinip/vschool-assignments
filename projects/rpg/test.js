var readline = require("readline-sync");
var textLib = require("./text-library");

function promptOptions(options, answers, fail){
    console.log(textLib.options.prompt);
    options = options.join("\n");
    var response = readline.question(options, {limit: answers, limitMessage: fail});
    return response;
}

function chat(character, context){
    var name = character.name;
    var chatContext = character.chat[context];
    var reply = chatContext.firstReply;
    var response = "";
    var end = false;
    do {
        console.log(name + reply);
        response = promptOptions(chatContext.options, chatContext.answers, chatContext.fail);
        if (response === "back"){
            console.log("\n" + name + chatContext.back);
            end = true;
        } else {
            readline.question("\n" + name + chatContext[response]);
            reply = chatContext.replyMore;
        } 
    } while (end === false);
}

chat(textLib.malthael, "intro");