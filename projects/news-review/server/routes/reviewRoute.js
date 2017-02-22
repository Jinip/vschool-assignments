var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();
var Review = require("../models/review.js");
var Article = require("../models/article.js")

router.route("/")
    .get(function (req, res) {
        console.log(req.user);
        if (Object.keys(req.query) === 0) {
            Review.find({}).lean().populate("reviewed_by").exec(function (err, reviews) {
                if (err) return res.status(500).send(err);
                
                reviews.forEach(function(review){
                    delete review.reviewed_by.password;
                })
                
                res.send(reviews);
            })
        } else {
            Review.find(req.query).lean().populate("reviewed_by").exec(function (err, reviews) {
                if (err) return res.status(500).send(err);
                
                reviews.forEach(function(review){
                    delete review.reviewed_by.password;
                })
                
                res.send(reviews);
            })
        }
    })

    .post(function (req, res) {
        var review = new Review(req.body);

        review.save(function (err, newReview) {
            if (err) return res.status(500).send(err);
            
            Article.findByIdAndUpdate(newReview.article, {$push: {"reviews": newReview._id}}, function(err, article){
                if (err) return res.status(500).send(err);
                
                res.send(newReview);
            })
        })
    })

router.route("/:id")
    .get(function(req, res){
        Review.findById(req.params.id).lean().populate("reviewed_by").exec(function(err, review){
            console.log(review);
            if (err) return res.status(500).send(err);
            
            delete review.reviewed_by.password;
            
            res.send(review);
        })
    })

    .put(function(req, res){
        Review.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedReview){
            if (err) return res.status(500).send(err);
            
            res.send(updatedReview);
        })
    })

    .delete(function(req, res){
        Review.findById(req.params.id, function(err, deletedReview){
            if (err) return res.status(500).send(err);
                
            res.send(deletedReview);
        })
    })

module.exports = router;