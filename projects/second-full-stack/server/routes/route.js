var express = require("express");
var router = express.Router();
var Model = require("../models/model");

router.route("/")
    .get(function(req, res){
        Model.find({user: req.user._id}, function(err, items){
            if (err) return res.status(500).send(err);
            
            return res.send(items);
        })
    })
    
    .post(function(req, res){
        var model = new Model(req.body);
        model.user = req.user;
        
        model.save(function(err){
            if (err) return res.status(500).send(err);
            
            return res.send(model);
        })
    })

router.route("/:id")
    .get(function(req, res){
        Model.findOne({_id: req.params.id, user: req.user._id}, function(err, item){
            if (err) return res.status(500).send(err);
            
            return res.send(item);
        })
    })
    
    .put(function(req, res){
        Model.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, { new: true }, function(err, savedItem){
            if (err) return res.status(500).send(err);
                
            return res.send(savedItem);
        })
    })

    .delete(function(req, res){
        Model.findOneAndRemove({_id: req.params.id, user: req.user._id}, function(err, deletedItem){
            if (err) return res.status(500).send(err);
            
            return res.send(deletedItem);
        })
    })

module.exports = router;