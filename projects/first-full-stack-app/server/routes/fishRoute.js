var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Fish = require("../models/fish");

router.route("/")
    .get(function(req, res){
        if (Object.keys(req.query).length === 0){
            Fish.find(function(err, fishes){
                if (err) return res.status(500).send(err);

                res.send(fishes);
            })
        } else {
            Fish.find(req.query, function(err, fishes){
                if (err) return res.status(500).send(err);

                res.send(fishes);
            })
        }
    })
    
    .post(function(req, res){
        var fish = new Fish(req.body);
    
        fish.save(function(err){
            if (err) return res.status(500).send(err);
            
            res.send(fish);
        })
    })

router.route("/types")
    .get(function(req, res){
        Fish.find().distinct("type", function(err, types){
            if (err) return res.status(500).send(err);

            res.send(types);
        })
    })

router.route("/:id")
    .get(function(req, res){
        Fish.findById(req.params.id, function(err, fish){
            if (err) return res.status(500).send(err);
            
            res.send(fish);
        })
    })
    
    .put(function(req, res){
        Fish.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedFish){
            if (err) return res.status(500).send(err);
            
            res.send(updatedFish);
        })
    })
    .delete(function(req, res){
        Fish.findByIdAndRemove(req.params.id, function(err, deletedFish){
            if (err) return res.status(500).send(err);
            
            res.send(deletedFish);
        })
    })



module.exports = router;