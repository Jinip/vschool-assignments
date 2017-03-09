var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken")
var config = require("../config");
var User = require("../models/user");

router.route("/signup/")
    .post(function(req, res){
        User.findOne({username: req.body.username}, function(err, user){
            if (err) return res.status(500).send(err);
            
            if (user){
                return res.send({success: false, message: "That user name is already taken"});
            }
            
            user = new User(req.body);

            user.save(function(err){
                if (err) return res.status(500).send(err);

                return res.send({success: true, message: "Created new user" + user.username, user: user});
            })
        })
    })

router.route("/login/")
    .post(function(req, res){
        //hash password
        User.findOne({username: req.body.username, password: req.body.password}, function(err, user){
            if (err) return res.status(500).send(err);
            console.log(req.body, user);
            if (!user){
                return res.send({success: false, message: "User name or password is incorrect"});
            }
            
            var token = jwt.sign(user.toObject(), config.secret);

            return res.send({success: true, user: user, token: token});
        })    
    })

router.route("/users/")
    .put(function(req, res){
        User.findOne({username: req.body.username}, {new: true}, function(err, user){
            if (err) return res.status(500).send(err);
            console.log(user);
            user = req.body;
            user.save(function(err){
                if (err) return res.status(500).send(err);
                
                return res.send(user);
            })
        })
    })

module.exports = router;