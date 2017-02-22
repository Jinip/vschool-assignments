var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");

router.route("/")
    .get(function(req, res){
        if (Object.keys(req.query) === 0){
            User.find(function(err, users){
                if (err) return res.status(500).send(err);
                
                return res.send(users);
            })
        } else {
            User.find(req.query, function(err, users){
                if (err) return res.status(500).send(err);
                
                return res.send(users);
            })
        }
    })

    .post(function(req, res){
        var user = new User(req.body)
        
        user.save(function(err, newUser){
            if (err) return res.status(500).send(err);
            
            return res.send(newUser);
        })
    })

router.route("/:id")
    .get(function(req, res){
        console.log(req.params);
        if (mongoose.Types.ObjectId.isValid(req.params.id)){
            console.log("is valid");
            User.findById(req.params.id).populate({path: "reviews", populate: {path: "article", model: "article"}}).exec(function(err, user){
                if (err) return res.status(500).send(err);
                console.log(user.reviews);
                return res.send(user);
            })
        } else {
            console.log("not valid");
            User.find({username: req.params.id}).populate({path: "reviews", populate: {path: "article", model: "article"}}).exec(function(err, user){
                if (err) return res.status(500).send(err);
                console.log(user.reviews);
                return res.send(user);
            })
        }
        
    })

    .put(function(req, res){
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedUser){
            if (err) return res.status(500).send(err);
            
            return res.send(updatedUser);
        })
    })

    .delete(function(req, res){
        User.findByIdAndDelete(req.params.id, function(err, deletedUser){
            if (err) return res.status(500).send(err);
            
            return res.send(deletedUser);
        })
    })

module.exports = router;