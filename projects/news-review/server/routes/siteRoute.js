var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();
var Site = require("../models/site.js");

router.route("/")
    .get(function (req, res) {
        if (Object.keys(req.query) === 0) {
            Site.find({}).populate("articles").sort("name").exec(function (err, sites) {
                if (err) return res.status(500).send(err);

                res.send(sites);
            })
        } else {
            Site.find(req.query).populate("articles").exec(function (err, sites) {
                if (err) return res.status(500).send(err);

                res.send(sites);
            })
        }
    })

    .post(function (req, res) {
        var site = new Site(req.body);

        site.save(function (err, newSite) {
            if (err) return res.status(500).send(err);

            res.send(newSite);
        })
    })

router.route("/recent/")
    .get(function(req, res){
        Site.find({}).sort("-updatedAt").exec(function(err, sites){
            if (err) return res.status(500).send(err);
            
            res.send(sites);
        })
    })

router.route("/:id")
    .get(function(req, res){
        Site.findById(req.params.id, function(err, site){
            if (err) return res.status(500).send(err);

            res.send(site);
        })
    })

    .put(function(req, res){
        Site.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedSite){
            if (err) return res.status(500).send(err);

            res.send(updatedSite);
        })
    })

    .delete(function(req, res){
        Site.findByIdAndDelete(req.params.id, function(err, deletedSite){
            if (err) return res.status(500).send(err);

            res.send(deletedSite);
        })
    })

module.exports = router;