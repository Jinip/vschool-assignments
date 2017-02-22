var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var siteSchema = new Schema({
    name: String,
    url: String,
    mainSiteLink: String,
    logo: String,
    summary: String,
    score: {
        total: {
            type: Number
                //        required: true
        },
        economic_bias: {
            type: Number
                //        required: true
        },
        social_bias: {
            type: Number
                //        required: true
        },
        accuracy: {
            type: Number
                //        required: true
        },
        complexity: {
            type: Number
                //        required: true
        }
    },
    articles: [{
        type: Schema.Types.ObjectId,
        ref: "article"
    }]
}, 
{
    timestamps: true
})

module.exports = mongoose.model("site", siteSchema);