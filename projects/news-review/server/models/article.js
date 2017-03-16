var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    source: {
        name: String,
        url: String
    },
    title: {
        type: String
//        required: true
    },
    url: {
        type: String
//        required: true
    },
    link: {
        type: String
//        required: true
    },
    summary: {
        type: String
//        required: true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "review"
    }],
    completed: {
        type: Boolean,
        default: false
    },
    score: {
        total: {
            type: Number
        },
        econ_bias: {
            type: Number
        },
        social_bias: {
            type: Number
        },
        accuracy: {
            type: Number
        },
        complexity: {
            type: Number
        }
    }
})

module.exports = mongoose.model("article", articleSchema);