var readline = require("readline-sync");

var name = readline.question("My name's Winifred! What's yours? ");

console.log("" + name.toUpperCase() + "! That's a great name.")

var sign = readline.question("\nSo... You come here often, " + name + "? What's your sign? ");

if (sign[sign.length - 1] != "s") sign += "s";

console.log("We're compatible! I love " + sign + ". I think we're going to get along swimmingly; all my favorite signs have " + ((sign.length) - 1) + " letters.");

var story = readline.question("\nTell me more about yourself. Anything you'd like me to know. ");

if (story.length > 20){
    console.log("Wait, so your story is: " + story.substr(story.length/2) + " Was that about right?");
} else {
    console.log("So your story is: " + story);
}

var startPoint = readline.question("\nIt's a really great story! I have it memorized already, all " + story.length + " characters of it. I'll repeat it back from any point, just tell me where from 0 to " + ((story.length) - 1) + ". ");

console.log(story.substr(startPoint));

readline.question("\nThis was fun! Let's talk again soon, " + name + "!");