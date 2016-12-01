function Location(chance) {
    this.ship = isShip(chance);

    this.display = "~";

    this.hit = function () {
        if (this.ship) {
            this.display = "!";
            return true;
        } else {
            this.display = "X";
            return false;
        }
    }
}

function isShip(chance){
    console.log(chance);
    return Math.random() < chance;
}

module.exports = Location;