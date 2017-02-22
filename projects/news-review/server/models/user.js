var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String
//        required: true
    },
    password: {
        type: String
//        required: true
    },
    blurb: {
        type: String,
        default: ""
    },
    viewpoint: {
        name: {
            type: String,
            default: "unevaluated"
        },
        coordinate: Array
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "review"
    }]
})

module.exports = mongoose.model("user", UserSchema);