var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Guide = require("../models/guide");

router.route("/")
    .get(function(req, res){
        Guide.find(function(err, items){
            if (err) return res.status(500).send(err);
            
            res.send(items);
        })
    })
    
    .post(function(req, res){
        var guide = new Guide(req.body);
    
        guide.save(function(err, savedGuide){
            if (err) return res.status(500).send(err);
            
            res.send(savedGuide);
        })
    })

router.route("/:id")
    .get(function(req, res){
        Guide.findById(req.params.id, function(err, item){
            if (err) return res.status(500).send(err);
            
            res.send(item);
        })
    })
    
    .put(function(req, res){
        Guide.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedGuide){
            if (err) return res.status(500).send(err);
            
            res.send(updatedGuide);
        })
    })

    .delete(function(req, res){
        Guide.findByIdAndRemove(req.params.id, function(err, deletedGuide){
            if (err) return res.status(500).send(err);
            
            res.send(deletedGuide);
        })
    })

router.route("/:guideId/comments/")
    .post(function(req, res){
        Guide.findById(req.params.guideId, function(err, guide) {
            if (err) return res.status(500).send(err);
            
            guide.comments.push(req.body);
            
            guide.save(function(err){
                if (err) return res.status(500).send(err);
                
                res.send(guide);
            })
        });
    });
    
router.route("/:guideId/comments/:commentId/")
    .put(function(req, res){
        Guide.findById(req.params.guideId, function(err, guide){
            if (err) return res.status(500).send(err);
            
            guide.comments.id(req.params.commentId).set(req.body);
            
            guide.save(function(err){
                if (err) return res.status(500).send(err);
                
                res.send(guide);
            })
        })
    })

    .delete(function(req, res){
        Guide.findbyId(req.params.guideId, function(err, guide){
            if (err) return res.status(500).send(err);
            
            guide.comments.id(req.params.commentId).remove();
            
            guide.save(function(err){
                if (err) return res.status(500).send(err);
                
                res.send(guide);
            })
        })
    })

router.route("/:guideId/comments/:commentId/replies/")
    .post(function(req, res){
        Guide.findById(req.params.guideId, function(err, guide) {
            if (err) return res.status(500).send(err);
            
            guide.comments.id(req.params.commentId).push(req.body);
            
            guide.save(function(err){
                if (err) return res.status(500).send(err);
                
                res.send(guide);
            })
        });
    });


router.route("/:guideId/:commentId/replies/:replyId")
    .put(function(req, res){
        Guide.findbyId(req.params.guideId, function(err, guide){
            if (err) return res.status(500).send(err);
            
            guide.comments.id(req.params.commentId).replies.id(req.params.replyId).set(req.body);
            
            guide.save(function(err){
                if (err) return res.status(500).send(err);
                
                res.send(guide);
            })
        })
    })
    
    .delete(function(req, res){
        Guide.findbyId(req.params.guideId, function(err, guide){
            if (err) return res.status(500).send(err);
            
            guide.comments.id(req.params.commentId).replies.id(req.params.replyId).remove();
            
            guide.save(function(err){
                if (err) return res.status(500).send(err);
                
                res.send(guide);
            })
        })
    })


module.exports = router;