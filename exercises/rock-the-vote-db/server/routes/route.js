var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Issue = require("../models/issue");

router.route("/")
    .get(function (req, res) {
        console.log("get request");
        Issue.find(function(err, issues){
            if (err){
                console.log(err);
                res.status(500).send(err);
            } else {
                console.log(issues);
                res.send(issues);
            }
        })
    })
    .post(function (req, res) {
        req.body.votes = {upvotes: 0, downvotes: 0};
        var issue = new Issue(req.body);
        issue.save(function(err, issue){
            if (err){
                res.status(500).send(err);
            } else {
                res.send(issue);
            }
        })
    })

router.route("/:id")
    .put(function (req, res) {
        Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedIssue){
            if (err){
                res.status(500).send(err);
            } else {
                res.send(updatedIssue);
            }
        })
    })
    .delete(function (req, res) {
        Issue.findByIdAndRemove(req.params.id, function(err, deletedIssue){
            if (err){
                res.status(500).send(err);
            } else {
                res.send(deletedIssue);
            }
        })
    })

module.exports = router;