var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();
var Review = require("../models/review.js");
var Article = require("../models/article.js");
var User = require("../models/user.js");

function roundToPointFive(average){
    return (Math.round(average * 2) / 2).toFixed(1);
}

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
        review.reviewed_by = req.user._id;
        
        var rating = req.body.rating;
        review.rating = {
            total: rating.econBias.score + rating.socialBias.score + rating.accuracy.score + rating.complexity.score,
            econ_bias: rating.econBias,
            social_bias: rating.socialBias,
            accuracy: rating.accuracy,
            complexity: rating.complexity
        };
        review.save(function (err, newReview) {
            if (err) return res.status(500).send(err);
            
            Article.findByIdAndUpdate(newReview.article, {$push: {"reviews": newReview._id}}, function(err, article){
                if (err) return res.status(500).send(err);
            })
            
            Article.findById(newReview.article).populate("reviews").exec(function(err, article){
                if (err) return res.status(500).send(err);
                
                var articleScore = {
                    total: 0,
                    econ_bias: 0,
                    social_bias: 0,
                    accuracy: 0,
                    complexity: 0
                };
                
                var numReviews = article.reviews.length;
                
                article.reviews.forEach(function(articleReview){
                    articleScore.total += articleReview.rating.total;
                    articleScore.econ_bias += articleReview.rating.econ_bias.score;
                    articleScore.social_bias += articleReview.rating.social_bias.score;
                    articleScore.accuracy += articleReview.rating.accuracy.score;
                    articleScore.complexity += articleReview.rating.complexity.score;
                })
                
                articleScore.total = roundToPointFive(articleScore.total / numReviews);
                articleScore.econ_bias = roundToPointFive(articleScore.econ_bias / numReviews);
                articleScore.social_bias = roundToPointFive(articleScore.social_bias / numReviews);
                articleScore.accuracy = roundToPointFive(articleScore.accuracy / numReviews);
                articleScore.complexity = roundToPointFive(articleScore.complexity / numReviews);
                
                console.log(articleScore);
                
                article.score = articleScore;
                
                Article.findByIdAndUpdate(article._id, article, {new: true}, function(err, updatedArticle){
                    console.log(updatedArticle);
                    if (err) return res.status(500).send(err);
                })
            })
            
            User.findByIdAndUpdate(req.user._id, {$push: {"reviews": newReview._id}}, function(err, user){
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