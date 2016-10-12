var player = {
    name: "Luigi",
    totalCoins: 0,
    status: "Big",
    star: false,
    setName: function(pickedName){
        if (pickedName === "Mario"){
            player.name = "Mario";
        } else {
            player.name = "Luigi";
        }
    },
    gotHit: function(){
        switch (player.status){
            case "Powered Up":
                player.status = "Big";
                break;
            case "Big":
                player.status = "Small";
                break;
            default:
                player.status = "Dead";
                player.gameActive = false;
        }
    },
    gotPowerup: function(){
        switch (player.status){
            case "Small":
                player.status = "Big";
                break;
            default:
                player.status = "Powered Up";
        }
    },
    gameActive: true,
    addCoin: function(){
        player.totalCoins++
    },
    print: function(){
        console.log("Name: " + player.name);
        console.log("Status: " + player.status);
        console.log("Total Coins: " + player.totalCoins);
        console.log("Star Active: " + player.star);
    },
    restart: function(){
        this.totalCoins = 0;
        this.status = "Big";
        this.star = false;
        this.gameActive = true;
    }
}

function event(){
    if (player.gameActive === false){
        console.log("Sorry, you ded. Restart and try again.");
        return;
    }
    var random = Math.floor(Math.random() * 3);

    switch (random){
        case 0:
            player.gotHit();
            console.log("Got hit!\n")
            break;
        case 1:
            player.gotPowerup();
            console.log("Got Power Up!\n")
            break;
        case 2:
            player.addCoin();
            console.log("Got coin!\n")
    }
    player.print();
}

function restart(){
    player.restart();
}