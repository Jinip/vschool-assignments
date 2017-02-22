var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken")
var bcrypt = require("bcrypt");
var config = require("../config");
var User = require("../models/user");

router.route("/signup/")
    .post(function(req, res){
        User.findOne({username: req.body.username}, function(err, user){
            if (err) return res.status(500).send(err);
            
            if (user){
                return res.send({success: false, message: "That user name is already taken"});
            }

            bcrypt.hash(req.body.password, 10, function(err, hash){
                if (err) return res.status(500).send(err);
                
                user = new User({username: req.body.username, password: hash});
            
                user.save(function(err, newUser){
                    if (err) return res.status(500).send(err);

                    return res.send({success: true, message: "user" + newUser.username + " created successfully.", user: newUser.username});
                })
            })
        })
    })

router.route("/login/")
    .post(function(req, res){
        User.findOne({username: req.body.username}, function(err, user){
            if (err) return res.status(500).send(err);
            
            if (!user){
                console.log("no user");
                return res.send({success: false, message: "User name or password is incorrect"});
            }
            
            bcrypt.compare(req.body.password, user.password, function(err, result){
                if (err) return res.status(500).send(err);
                
                if (result){

                    var token = jwt.sign(user.toObject(), config.secret);
                    
                    return res.send({success: true, user: user.username, token: token});
                } else {
                    return res.send({success: false, message: "User name or password is incorrect"});
                }
                
            });
//            bcrypt.compare(req.body.password, user.password, function(err, result){
//                if (err) return res.status(500).send(err);
//                
//                console.log("incorrect hash");
//                
//                
//            });
        })    
    })

module.exports = router;