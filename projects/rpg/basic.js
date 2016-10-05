function Player (playerName, playerHealth, playerItems){
    this.name = playerName;
    this.health = playerHealth || 100;
    this.items = playerItems || [];
    this.min = 5;
    this.max = 10;
    this.attack = function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };
    this.hp = function() {
        return this.health + " Million Fans";
    };
}

function Enemy (enemyObj){
    this.name = enemyObj.name;
    this.health = enemyObj.health;
    this.min = enemyObj.min;
    this.max = enemyObj.max;
    this.intro = enemyObj.intro;
    this.attackCaption = enemyObj.attackCaption;
    this.droppedItem = enemyObj.droppedItem;
    this.attack = function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };
}

function playerAttack(player, enemy){
    var attack = player.attack();
    
    console.log("Taylor werks it and takes the " + enemy.name + "' confidence down by " + attack + " points\n");
    
    return attack;
}

function enemyAttack(enemy){
    var attack = enemy.attack();
    
    console.log(enemy.attackCaption + attack + " million fans");
    
    return attack;
}

var enemyList = [
    {
        intro: "Ugh, the Players appeared. They're so insincere.",
        name: "Players",
        health: 30,
        min: 5,
        max: 15,
        attackCaption: "The players stood Ms. Tay up on a date! She feels she's less sexy and so do ",
        droppedItem: "Girl Power"
    },
    {
        intro: "It's the Haters. Don't worry; they're just jealous of Swifty's fame.",
        name: "Haters",
        health: 20,
        min: 5,
        max: 15,
        attackCaption: "\"Taylor Swift can't even sing! She's too tall!\" The Haters scare off ",
        droppedItem: "Thick Skin"
    },
    {
        intro: "Heart Breakers! Look out, they could be Tay's downfall... or the subject of her next hit album...",
        name: "Heart Breakers",
        health: 30,
        min: 15,
        max: 25,
        attackCaption: "The Heartbreakers just broke up with T-Swift via text message! And instead go out with ",
        droppedItem: "Ex-Boyfriend"
        
    },
    {
        intro: "Fakers! They're so fake, maybe we're just imagining them.",
        name: "Fakers",
        health: 10,
        min: 5,
        max: 10,
        attackCaption: "No makeup! No filter! The Fakers exasperate ",
        droppedItem: "Sass"
    }
];




var readline = require("readline-sync");

console.log("Welcome to Tay Tay Attack!\n")

var name = readline.question("What's your name? ");

var player = new Player(name);

console.log("Hai, " + player.name + "! Get ready to help Taylor Swift Shake It Off!\n");

console.log("T-Swizzle is just trying to live her life, but all this players, haters, heart breakers, and fakers keep making life so difficult and keep trying to ruin her reputation. Can you protect her fame from all this toxic negativity?\n");

var winning = true;
var turn = 0;

while (winning || turn < 12){
    console.log("T-Swift has " + player.hp() + "fans")
    var response = readline.question("How we gonna roll?\n\tStrut your stuff (w) \n\tCheck your pockets (print) \n\tExit (exit)", {limit: ["w", "print", "exit"], limitMessage: "\nOh, Tay Tay, you cray cray. Try again!"});
    
    if (response === "w"){
        var random = Math.random();
        if (random < 0.66){
            
            winning = battle();
            
        } else {
            
            console.log("There's a blank space where the punks would have been. We're safe, gurl!");
            
        }
    } else if (response === "print") {
        
        printInventory(player.items);
        
    } else {
        return;
    }
}

if (winning === true){
    
    readline.question("You saved Taylor Swift's reputation and defeated all liars and dirty, dirty cheats of the world. Congratulations!");
    
} else {
    
    readline.question("You were defeated and the name of Taylor Swift was burned to ashes never to rise from obscurity. Better luck next time!");
    
}

function battle(){
    var enemy = new Enemy(enemyList[Math.floor(Math.random() * 4)]);
    var shakeOffRatio = 0.2;
    console.log(enemy);
    
    console.log(enemy.intro);
    
    while((player.health > 0 || enemy.health > 0))
    {
        console.log("Taylor has " + player.hp + " million fans left");
        var response = readline.question("What should Taylor do? \n\tConfront them (a) \n\tCheck her pockets (print) \n\tIgnore them (run) ", {limit: ["a", "print", "run"], limitMessage: "\nOh, Tay Tay, you cray cray. Try again!" });
        
        if (response === "a"){
            
            enemy.health -= playerAttack(player, enemy);
            
        } else if (response === "run"){
            
            if (Math.random() < 0.5){
                
                console.log("Taylor escaped Swiftly from the " + enemy.name + "!");
                return true;
                
            } else {
                
                console.log("They're really persistent. She can't get away.");
                
            }
        } else {
            
            item = printInventory();
            
            
        } 
        
        if (enemy.health > 0){
            var enemyDamage = enemyAttack(enemy);
            var shakenOff = Math.random();
            
            if (shakenOff <= shakeOffRatio){
                console.log("SHAKE IT OFF! the " + enemy.name + " tried to bring Tay down, but she's too good for that.");
            } else {
                player.health -= enemyDamage;
            }
            

        } else {

            console.log("You defeated the " + enemy.name + "!");
            return true;
        }
        
        if (player.health <= 0){
        
            console.log("You were defeated by the " + enemy.name + "!");
            return false;
            
        }
        
    }
}

