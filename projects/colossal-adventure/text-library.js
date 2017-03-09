var scenes = {
    /////// INTRO ///////
    intro: {
        opening: [
                "You're dead. ",

                "And you thought that would be the end, didn't you? Unfortunately, there is more. There's always more. ",

                "You open your eyes to gaze about and see a foggy atmosphere, somewhere between Seattle at dawn and that hot box you found yourself in that one time in college. You begin to hear a shuffling sound in the distance and the dark shape of a figure emerging through the mist.",

                "\"There you are. Finally,\" you hear the figure say. \"Why can't people all just appear in the same place? All this running around...\" ",

                "The figure emerges from the fog and stands above you, sizing you up. At least, that's what he seems to be doing; it's hard to tell. His black pupil-less eyes give no hint as to the direction he's looking, like built-in sunglasses. ",

                "The humanoid creature seems to be all limbs, with long, gangling arms and legs clothed in a pinstriped suit. Twelve feet tall at least and as bony as a skeleton.\n He squats down to be on your level, knees flaring out seemingly forever on either side as he pulls a clipboard from in his inner jacket pocket. ",

                "\"Welcome to Limbo,\" the creature sighs with boredom, pulling out a pen the length of your forearm. \"If you haven't guessed yet, you're here because we don't know what to do with you. You didn't quite make it to Heaven, but aren't really deserving of Hell.\" He pauses to gauge your reaction, then continues after seeing your stoic face mumbling something about sociopaths. \"So here's what we suggest:\" ",

                "\"This realm is very dangerous, not many of us like coming here much. The Sins are constantly mucking about and it gets tedious to have to deal with them all the time. If you can take out ten of them without getting yourself killed -- Yes,\" he said, seeing your confused expression, \"you can still die on this plane. If you kill ten of them, we'll give you another chance to clean your life up.\" He consults his notepad briefly. \"Looks like you're technically still in a coma. Not a problem. We can give you the boost you need to survive to continue your life, but only if you succeed. Otherwise, we're sending you downstairs to bother someone else.\" ",

                "The creature stands up, reaching his full, formidable height again. \"Simple enough. Kill ten creatures: get a second chance. Fail: go to Hell.\" There's a moment of silence before he says, impatiently, \"Well, what are you waiting for? ",

                "(You've been tasked with destroying ten Sins in Limbo.)\n"
            ],
        
    }
};


/////// OPTIONS ///////
var options = {
    prompt: "What will you do?",
    ///////  INTRO ///////
    intro: {
        options: [
            "\tSpeak with Malthael (talk)",
            "\tAccept challenge (continue)",
        ],
        answers: [
            "talk",
            "continue",
            "exit"
        ],
        
        continue: "Malthael smirks, \"Perfect. Then it's decided.\"\n",
        
        fail: "(Malthael blinks slowly, apparently praying for patience as you try to make sense)\n",
        
        character: "malthael"
    }
};

/////// CHARACTERS ///////
var characters = {
    /////// MALTHAEL ///////
    malthael: {
        name: "Malthael: ",
        chat: {
            /////// INTRO ///////
            intro: {
                replyFirst: "\"What do you want?\"\n",

                replyMore: "\"Anything else?\"\n",

                back: "\"Are you ready yet?\"\n",

                fail: "(Malthael blinks slowly, apparently praying for patience as you try to make sense)\n",

                options: [
                    "\tAsk about Malthael (malthael)",
                    "\tAsk about Limbo (limbo)",
                    "\tAsk about death (death)",
                    "\tStop talking (back) "
                ],

                answers: [
                    "malthael",
                    "limbo",
                    "death",
                    "back"
                ],

                malthael: "\"My name is Malthael. I'm a reaper. Normally, I get to take souls from dying people and shepherd them to their final destinations. Today, I'm on clean up duty for the lost souls wandering around down here because they were so lame in life that neither Heaven nor Hell really want them. That's you, by the way.\n",

                limbo: "\"As I've told you, you're here because you don't qualify for Heaven or Hell. I didn't bother to look up your record, but I'm guessing you probably tried your darndest to be a \'good person\' or whatever, but the Papa of the Sky wasn't so impressed, but because you were basically good, Luci doesn't want you either. I don't make the rules... Well, that's not true. I do make the rule that you go to Hell by default if you're not useful here. Just simpler for me. Nothing personal.\"\n",

                death: "\I've seen and heard of a lot of choking incidents, but I must say, yours was pretty creative. I hope you were enjoying yourself up until that point, anyway.\"\n"
            }
        }
    }
};

module.exports.scenes = scenes;
module.exports.options = options;
module.exports.characters = characters;

