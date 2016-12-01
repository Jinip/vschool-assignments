var express = require("express");
var router = express.Router();
var uuid = require("uuid");

var bounties = [
    {
        id: "1",
        fName: "Count",
        lName: "Dooku",
        bounty: 1000000,
        type: "Sith",
        living: false
    },
    {
        id: "2",
        fName: "Obi-Wan",
        lName: "Kenobi",
        bounty: 2000000,
        type: "Jedi",
        living: true
    }
]

router.route("/")
    .get(function (req, res) {
        res.send(bounties);
    })
    .post(function (req, res) {
        var bounty = req.body;
        bounty.id = uuid.v4();
        bounty.living = true;
        bounties.push(bounty);
        res.send(bounty);
    })

router.route(":id")
    .get(function (req, res) {
        console.log(req.params.id);
        bounties.forEach(function (bounty) {
            console.log(bounty.id);
            if (req.params.id === bounty.id) {
                console.log("found");
                res.send(bounty);
            }
        })
    })
    .put(function (req, res) {
        bounties.forEach(function (bounty, index) {
            if (req.params.id === bounty.id) {
                bounty = req.body;
                bounty.id = uuid.v4();
                bounties[index] = bounty;
                res.send(bounty);
            }
        })
    })
    .delete(function (req, res) {
        bounties.forEach(function (bounty, index) {
            if (req.params.id === bounty.id) {
                var deletedBounty = bounty;
                bounties.splice(index, 1);
                res.send(deletedBounty);
            }
        })
    })

module.exports = router;