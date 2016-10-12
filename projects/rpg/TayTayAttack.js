var readline = require("readline-sync");

function Player (playerName, playerHealth, playerItems){
    this.name = playerName;
    this.health = playerHealth || 200;
    this.items = playerItems || [];
    this.min = 5;
    this.max = 10;
    this.shakeOffBase = 0.2;
    this.shakeOffRatio = 0.2;
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


function Item (itemObj){
    this.name = itemObj.name;
    this.description = itemObj.description;
    this.action = itemObj.action;
}

var items = {
    girlPower: {
        name: "Girl Power",
        description: "Swift inspires with her feminie strength of character and gains some fans",
        action: "\nTaylor used Girl Power! The world is in awe of her powerful womanly ways and she gains 20 million fans!"
    },
    thickSkin: {
        name: "Thick Skin",
        description: "Ms. Tay squares her jaw and doubles her chances to shake of harrassment",
        action: "\nTay used Thick Skin! She's all the more resilant to hate."
    },
    exBoy: {
        name: "Ex-Boyfriend",
        description: "Using the power of break ups, Taylor writes a new album and gains many fans",
        action: "\nTaylor uses Ex-Boyfriend. She writes her latest album and gains 50 million fans!"
    },
    sass: {
        name: "Sass",
        description: "Snapping her fingers in a Z formation, T-Swift shows her haters who's boss, taking down their confidence",
        action: "\nT-Swizzle my nizzle demonstrates her sharp tongue and wit and takes the enemy's confidence down 10 notches."
    }   
};


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


    
console.log("\n\n\nWelcome to Tay Tay Attack!\n")

var name = readline.question("What's your name? ");

if (name = "Gyllenhaal") {
    var player = new Player(name, 100, [items.exBoy, items.girlPower, items.thickSkin, items.sass])
}

var player = new Player(name, 100);

var enemy = new Enemy(enemyList[0]);

console.log("Hai, " + player.name + "! Get ready to help Taylor Swift Shake It Off!\n");

console.log("T-Swizzle is just trying to live her life, but all this players, haters, heart breakers, and fakers keep making life so difficult and keep trying to ruin her reputation. Can you protect her fame from all this toxic negativity?");

var winning = true;
var turn = 0;


while (winning && turn < 4){
    console.log("\nT-Swift has " + player.hp());
    var response = readline.question("How we gonna roll?\n\tStrut your stuff (w) \n\tCheck her pockets (print) \n\tExit (exit) ", {limit: ["w", "print", "exit"], limitMessage: "\nOh, Tay Tay, you cray cray. Try again!"});

    if (response === "w"){
        var random = Math.random();
        if (random < 0.66){

            winning = battle();

        } else {

            console.log("\nThere's a blank space where the punks would have been. We're safe, gurl!");

        }
    } else if (response === "print") {

        printInventory();
        continue;

    } else {
        return;
    }
    turn++;
}

if (winning === true){

    readline.question("\nWay to go, " + player.name + "! You saved Taylor Swift's reputation and defeated all those liars and dirty, dirty cheats of the world. Congratulations!");

} else {

    readline.question("\nYou were defeated and the name of Taylor Swift was burned to ashes, never to rise from obscurity. Great job...");

}


function battle(){
    var enemy = new Enemy(enemyList[Math.floor(Math.random() * 4)]);
    
    console.log("\n\n" + enemy.intro + "\n");
    
    while((player.health > 0 || enemy.health > 0))
    {
        console.log("Taylor has " + player.hp() + " million fans left and the " + enemy.name + " have " + enemy.health + " points of confidence left");
        var response = readline.question("What should Taylor do? \n\tPut those punks down! (a) \n\tCheck her pockets (print) \n\tIgnore them (run) ", {limit: ["a", "print", "run"], limitMessage: "\nOh, Tay Tay, you cray cray. Try again!" });
        
        if (response === "a"){
            
            enemy.health -= playerAttack(player, enemy);
            
        } else if (response === "run"){
            
            if (Math.random() < 0.5){
                
                console.log("\nTaylor Swiftly escaped from the " + enemy.name + "!");
                player.shakeOffRatio = player.shakeOffBase;
                return true;
                
            } else {
                
                console.log("\nThey're really persistent. She can't get away!");
                
            }
        } else {
            
            printInventory();
            
        } 
        
        if (enemy.health > 0){
            var shakenOff = Math.random();
            
            if (shakenOff <= player.shakeOffRatio){
                console.log("SHAKE IT OFF! the " + enemy.name + " tried to bring Tay down, but she's too good for that.\n");
            } else {
                player.health -= enemyAttack(enemy);
            }
            

        } else {

            console.log("You defeated the " + enemy.name + "!");
            player.shakeOffRatio = player.shakeOffBase;
            dropItem();
            
            return true;
        }
        
        if (player.health <= 0){
        
            console.log("You were defeated by the " + enemy.name + "!");
            return false;
            
        }
        
    }
}

function dropItem(){
    var random = Math.random();
    
    if (random < 0.40){
         if (enemy.name === "Players"){
        console.log("You won the item Girl Power from the Players!");
        player.items.push(new Item(items.girlPower));
        } else if (enemy.name === "Haters"){
            console.log("You won the item Thick Skin from the Haters!");
            player.items.push(new Item(items.thickSkin));
        } else if (enemy.name === "Heart Breakers"){
            console.log("You won the item Ex-Boyfriend from the Heart Breakers!");
            player.items.push(new Item(items.exBoy));
        } else {
            console.log("You won the itme Sass from the Fakers!");
            player.items.push(new Item(items.sass));
        }
    }
   
}

function printInventory(battling){
    console.log("\n" + player.name);
    console.log("Taylor has " + player.hp());
    console.log("Inventory -----");
    var selectedItem;
    var selectedIndex;
    var limits = ["back"];
    if (player.items.length > 0){
        for (var i = 0; i < player.items.length; i++){
            console.log(player.items[i].name);
            limits.push(player.items[i].name);
        }
        console.log("");
    } else {
        console.log("Nothing here!\n");
    }
    while (true){
        
        var response = readline.question("Type the name of the item you'd like to use: \nOr go back (back) ", {limit: limits});
        if (response === "back"){
            return "";
        } else {
            for (var j = 0; j < player.items.length; j++){
                if (response === player.items[j].name){
                    selectedIndex = j;
                    selectedItem = player.items[j];
                    break;
                }
            }
            console.log("\nDescription: " + selectedItem.description);
            if ((selectedItem.name === "Thick Skin" || selectedItem.name === "Sass")){
                if (battling === true){
                    response = readline.question("Use this item? (y/n)", {limit: ["y","n"]});
                } else {
                    readline.question("This item can only be used in a conflict\n");
                }
            } else {
                response = readline.question("Use this item? (y/n)", {limit: ["y","n"]});
            }
            if (response === "y"){
                useItem(selectedItem);
                player.items.splice(selectedIndex, 1);
                return;
            }
        }
    }
}


function useItem(item){
    if (item.name === "Girl Power"){
        console.log("\n" + item.action);
        player.health += 20;
    } else if ("\n" + item.name === "Thick Skin") {
        console.log(item.action);
        player.shakeOffRatio *= 2;
    } else if (item.name === "Ex-Boyfriend") {
        console.log("\n" + item.action);
        player.health += 50;
    } else {
        console.log("\n" + item.action);
        enemy.health -= 10;
    }
}


function playerAttack(player, enemy){
    var attack = player.attack();
    
    console.log("\n\nTaylor werks it and takes the " + enemy.name + "' confidence down by " + attack + " points\n");
    
    return attack;
}


function enemyAttack(enemy){
    var attack = enemy.attack();
    
    console.log(enemy.attackCaption + attack + " million fans\n");
    
    return attack;
}


