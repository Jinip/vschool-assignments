var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Bounty = require("../models/bounty");

router.route("/")
    .get(function (req, res) {
        Bounty.find(function (err, bounties) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(bounties);
            }
        })
    })
    .post(function (req, res) {
        req.body.living = false;
        var bounty = new Bounty(req.body)

        bounty.save(function (err, newBounty) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(bounty);
            }
        })
    })

router.route("/:id")
    .get(function (req, res) {
        Bounty.find({ _id: req.params.id }, function (err, bounty) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(bounty);
            }
        })
    })
    .put(function (req, res) {
        console.log("sent as" + req.body.living);
        Bounty.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, updatedBounty) {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log("received as" + updatedBounty);
                res.send(updatedBounty);
            }
        })
    })
    .delete(function (req, res) {
        Bounty.findByIdAndRemove(req.params.id, function (err, deletedBounty) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(deletedBounty);
            }
        })
    })

module.exports = router;