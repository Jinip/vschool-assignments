var readline = require("readline-sync");
var textLib = require("./text-library");

var gameOver = false;

var libScenes = textLib.scenes;
var libOptions = textLib.options;
var libCharacters = textLib.characters;

/////// INTRO ///////
var intro = {
    opening: function(){
        handleCutScene(libScenes.intro.opening);
    },
    options: function() {
        gameOver = handleOptions("intro");
        return gameOver;
    }
};

function promptOptions(options, answers, fail){
    console.log(libOptions.prompt);
    options = options.join("\n");
    var response = readline.question(options, {limit: answers, limitMessage: fail});
    return response;
}

function chat(character, context){
    var name = character.name;
    var chatContext = character.chat[context];
    var reply = chatContext.replyFirst;
    var response = "";
    var end = false;
    
    do {
        console.log("\n" + name + reply);
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

function handleOptions(context){
    var curOptions = libOptions[context];
    var character = curOptions.character;
    
    var response = "";
    var end = false;
    do{
        response = promptOptions(curOptions.options, curOptions.answers, curOptions.fail);
        if (response === "talk") {
            chat(libCharacters[character], context);
        } else if (response === "continue" || response === "back") {
            console.log("\n" + curOptions[response]);
            end = true;
        } else if (response === "exit"){
            readline.question("You wander into the mist and are lost forever...");
            return gameOver;
        }
    } while (end === false);
}

function handleCutScene(scene){
    var skip = "";
    for (var i = 0; i < scene.length; i++){
        skip = readline.question("\n" + scene[i]);
        if (skip === "skip"){
            console.log("\n" + scene[scene.length -1]);
            break;
        }
    }
}

module.exports.intro = intro;