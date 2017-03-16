var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();
var Article = require("../models/article.js");
var Site = require("../models/site.js");

router.route("/")
    .get(function (req, res) {
        console.log(req.query);
        if (Object.keys(req.query) === 0) {
            Article.find({}).populate("reviews").exec(function (err, articles) {
                if (err) return res.status(500).send(err);

                res.send(articles);
            })
        } else {
            console.log(req.query);
            Article.find(req.query).populate("reviews")
                .exec(function (err, articles) {
                if (err) return res.status(500).send(err);

                res.send(articles);
            })
        }
    })

    .post(function (req, res) {
        console.log(req.body);
        var article = new Article(req.body);
        
        article.url = article.title.replace(/\s/g, "-");
    
        article.save(function (err, newArticle) {
            if (err) return res.status(500).send(err);
            
            Site.findOneAndUpdate({name: newArticle.source.name}, {$push: {"articles": newArticle._id}}, function(err, site){
                if (err) return res.status(500).send(err);
                console.log(site);
                res.send(newArticle);
            })
        })
    })

router.route("/:id")
    .get(function(req, res){
        Article.findById(req.params.id, function(err, article){
            if (err) return res.status(500).send(err);

            res.send(article);
        })
    })

    .put(function(req, res){
        Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedArticle){
            if (err) return res.status(500).send(err);

            res.send(updatedArticle);
        })
    })

    .delete(function(req, res){
        Article.findByIdAndDelete(req.params.id, function(err, deletedArticle){
            if (err) return res.status(500).send(err);

            res.send(deletedArticle);
        })
    })

module.exports = router;