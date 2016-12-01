var readline = require("readline-sync");
var location = require("./location");
var board = require("./board");

function main() {

    board.newBoard(10, 10, location, 1 / 20);

    console.log("Welcome to Battleship! Get ready to blow stuff up!\n")

    while (board.shipCount > 0) {
        var end = turn();
        if (end){
            break;
        }
    }

    exit();
}

function turn() {
    console.log(board.shipCount + " ships remaining!")
    console.log(board.display());

    var response = readline.question("Guess a coordinate ([row number],[column number]) or exit (exit): ");

    if (!response) {
        console.log("Please enter a valid response");
    } else if (response === "exit") {
        return true;
    } else if (response === "radar") {
        board.radar();
    } else if (response === "mask") {
        board.mask();
    } else {
        var validated = validate(response);
        if (validated.err) {
            console.log(validated.err);
        } else {
            console.log(board.guess(validated.coords[0], validated.coords[1]));
        }

    }
}

function exit() {
    console.log(board.display());
    
    if (board.shipCount === 0) {
        readline.question("You've destroyed them all! Congratulations!");
    } else {
        readline.question("Thanks for playing!");
    }
}

function validate(response) {
    var validated = {
        coords: [],
        err: ""
    }

    if (!response.match(/^(\d|\d\d),(\d|\d\d)$/)) {
        validated.err = "Guess must be in this format ([row number],[column number]). Try again!";
    } else {
        var coords = response.split(",");
        coords[0] = parseInt(coords[0]);
        coords[1] = parseInt(coords[1]);

        if ((coords[0] > board.long || coords[0] === 0) || (coords[1] > board.wide || coords[1] === 0)) {
            validated.err = "Please enter a non-zero value in the board range [" + board.long + ", " + board.wide + "].";
        } else {
            validated.coords = [coords[0] - 1, coords[1] - 1];
        }
    }

    return validated;
}

main();