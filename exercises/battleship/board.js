module.exports = {
    board: [],

    shipCount: 0,

    long: 0,

    wide: 0,

    newBoard: function (long, wide, location, boatChance) {
        this.board = [];
        this.long = long;
        this.wide = wide;
        var ship = false;
        for (var i = 0; i < long; i++) {
            this.board.push([]);
            for (var j = 0; j < wide; j++) {
                this.board[i].push(new location(boatChance));
                if (this.board[i][j].ship) this.shipCount++
            }
        }
    },

    display: function () {
        var display = "";
        this.board.forEach(function (row) {
            row.forEach(function (location) {
                display += location.display + " ";
            })
            display += "\n";
        })
        return display;
    },

    guess: function (coordX, coordY) {
        var location = this.board[coordX][coordY];
        if (location.display === "~" || location.display === "S") {
            if (location.hit()) {
                this.shipCount--;
                return "Hit!\n";
            } else {
                return "Miss!\n";
            }
        } else {
            return "You've already guessed this location. Try again!\n";
        }
    },

    radar: function () {
        this.board.forEach(function (row) {
            row.forEach(function (location) {
                if (location.ship && !location.guessed) location.display = "S";
            })
        })
    },

    mask: function () {
        this.board.forEach(function (row) {
            row.forEach(function (location) {
                if (location.ship && !location.guessed) location.display = "~";
            })
        })
    }

}