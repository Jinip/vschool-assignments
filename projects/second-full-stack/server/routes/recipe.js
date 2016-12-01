var express = require("express");
var router = express.Router();
var Recipe = require("../models/recipe");

router.route("/")
    .get(function(req, res){
        // handle req.query to filter nutrient requirements and exclusions
    
        console.log(req.query);
        var self = this;
    
        this.plan = {
            breakfast: [],
            lunch: [],
            dinner: []
        }
        
        Recipe.find({ meal: "breakfast" }, function(err, breakfasts){
            if (err) return res.status(500).send(err);
            
            var excluded = false;
            breakfasts.forEach(function(meal){
                meal.ingredients.forEach(function(ingredient){
                    if (ingredient.name === req.query.exclude){
                        excluded = true;
                        return;
                    }
                })
                if (!excluded){
                    this.plan.breakfast.push(meal);
                }
                if (this.plan.breakfast.length === 7){
                    return;
                }
                excluded = false;
            })
            
            Recipe.find({ meal: "lunch" }, function(err, lunches){
                if (err) return res.status(500).send(err);

                var excluded = false;
                lunches.forEach(function(meal){
                    if (this.plan.lunch.length === 7){
                        return;
                    }
                    
                    meal.ingredients.forEach(function(ingredient){
                        if (ingredient.name === req.query.exclude){
                            excluded = true;
                            return;
                        }
                    })
                    
                    if (!excluded){
                        this.plan.lunch.push(meal);
                    }
                    
                    excluded = false;
                })
                
                Recipe.find({ meal: "dinner" }, function(err, dinners){
                    if (err) return res.status(500).send(err);

                    var excluded = false;
                    dinners.forEach(function(meal){
                        if (this.plan.dinner.length === 7){
                            return;
                        }
                        
                        meal.ingredients.forEach(function(ingredient){
                            if (ingredient.name === req.query.exclude){
                                excluded = true;
                                return;
                            }
                        })
                        if (!excluded){
                            this.plan.dinner.push(meal);
                        }

                        excluded = false;
                    })
                    
                    return res.send(this.plan);
                })
            })
        })
    })
    
    .post(function(req, res){
        var recipe = new Recipe(req.body);
        
        recipe.save(function(err){
            if (err) return res.status(500).send(err);
            
            return res.send(recipe);
        })
    })

//router.route("/:id")
//    .get(function(req, res){
//        Model.findOne({_id: req.params.id, user: req.user._id}, function(err, item){
//            if (err) return res.status(500).send(err);
//            
//            return res.send(item);
//        })
//    })
//    
//    .put(function(req, res){
//        Model.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, { new: true }, function(err, savedItem){
//            if (err) return res.status(500).send(err);
//                
//            return res.send(savedItem);
//        })
//    })
//
//    .delete(function(req, res){
//        Model.findOneAndRemove({_id: req.params.id, user: req.user._id}, function(err, deletedItem){
//            if (err) return res.status(500).send(err);
//            
//            return res.send(deletedItem);
//        })
//    })

module.exports = router;