var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    meal: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
    }
    
})

module.exports = mongoose.model("recipe", recipeSchema);