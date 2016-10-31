function Penguins(name, population){
    this.name = name || "Penguins";
    this.pop = population || 1000000;
    this.hit = " Penguins were nuked by the Communists!"
    this.miss = "The Communists missed the Penguins by a mile!"
    this.defeat = "The Communists defeated the Penguins!"
}


function Communists(name, population){
    this.name = name || "Communists";
    this.pop = population || 1000000;
    this.hit = " Communists were nuked by the Penguins!"
    this.miss = "The Penguins missed the Communists by a mile!"
    this.defeat = "The Penguins defeated the Communists!"
}

function flipACoin(){
    return Math.floor(Math.random() * 2);
}

function createParties(){
    var parties = [];
    var penguins = new Penguins();
    var communists = new Communists();
    var heads = flipACoin();
    
    if (heads){
        parties.push(penguins);
        parties.push(communists);
    } else {
        parties.push(communists);
        parties.push(penguins);
    }
    
    return parties;
}

function sendANuke(party, onHit, onMiss){
    var damage = calculateDamage();
    var hit = flipACoin();
    
    if (hit){
        onHit(party, damage);
    } else {
        onMiss(party);
    }
}

function calculateDamage(){
    return Math.ceil(Math.random() * (100000 - 50000) + 50000);
}

function onHit(party, damage){
    if (damage > party.pop) damage = party.pop;
    
    party.pop -= damage;
    
    console.log(damage + party.hit);
}

function onMiss(party){
    console.log(party.miss);
}

function printStatus(parties){
    console.log("\n" + parties[0].name + ": " + parties[0].pop + " ----- " + parties[1].name + ": " + parties[1].pop);
}

function isDefeated(party){
    var defeated = (party.pop === 0)
    
    if (defeated) console.log(party.defeat);
    
    return defeated
}

function battle(parties){
    var end = false;
    while(!end){
        printStatus(parties);
        for (party of parties){
            sendANuke(party, onHit, onMiss);
            end = isDefeated(party);
            if (end) break;
        }
    }
}

function main(){
    var parties = createParties();
    
    battle(parties);
}

main();

////decision logic
//function setTargetsPriority(party, ownIndex, parties){
//    var priorities = [[],[],[],[]];
//    for (var i = 0; i < parties.length; i++){
//        if (i !== ownIndex){
//            priority = determinePriority(party, parties[i])
//        }
//        if (priority !== undefined){
//            priorities[priority].push(i);
//        }
//    }
//    party.priorities = priorities;
//}
//
//function determinePriority(self, target){
//    if (target.pop > (self.pop * 1.20)){
//        return 1;
//    } else if (target.pop < (self.pop * 0.75)){
//        return 2;
//    } else if (target.pop > (self.pop * 1.1)){
//        return 3;
//    } else if (target.pop < (self.pop * 0.85)){
//        return 4;
//    } else {
//        return undefined;
//    }
//}
//
//function simulateAttack(ownIndex, priorityIndex, parties)
//    