function Enemy(){
    this.type = generateType();
    this.hp = generateHitPoints(this.type);
    this.defense = generateDefense(this.hp);
    this.print = function() {
        console.log(this.type + " " + this.hp + " " + this.defense);
    };
}

function generateType(){
    var types = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var num = Math.floor(Math.random() *3);
    
    return types[num];
}

function generateHitPoints(type){
    
    if (type === "Ancient Dragon"){
        return Math.floor(Math.random() * (100 - 80 + 1) + 80);
    } else if (type === "Prowler"){
        return Math.floor(Math.random() * (79 - 50 + 1) + 50);
    } else {
        return Math.floor(Math.random() * (49 - 20 + 1) + 49);
    }
}

function generateDefense(hitPoints){
    return hitPoints * 3;
}

var enemyList = [];

for (var i = 0; i < 100; i++){
    var enemy = new Enemy();
    enemyList.push(enemy);
}

console.log(enemyList);