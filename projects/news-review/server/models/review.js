var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    article: {
        type: Schema.Types.ObjectId,
        ref: "article"
//        required: true
    },
    reviewed_by: {
        type: Schema.Types.ObjectId,
        ref: "user"
//        required: true
    },
    title: {
        type: String
//        required: true
    },
    body: {
        type: String
            //        required: true
    },
    rating: {
        total: {
            type: Number
                //        required: true
        },
        econ_bias: {
            score: {
                type: Number
            },
            body: {
                type: String
            }
        },
        social_bias: {
            score: {
                type: Number
            },
            body: {
                type: String
            }
        },
        accuracy: {
            score: {
                type: Number
            },
            body: {
                type: String
            }
        },
        complexity: {
            score: {
                type: Number
            },
            body: {
                type: String
            }
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("review", reviewSchema);