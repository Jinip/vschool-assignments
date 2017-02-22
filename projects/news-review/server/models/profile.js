var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var profileSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId
//        required: true
    },
    username: {
        type: String
    },
    blurb: {
        type: String
    },
    viewpoint: {
        name: {
            type: String,
            default: "unevaluated"
        },
        coordinate: Array
    },
    reviews: {
        type: Schema.Types.ObjectId,
        ref: "review"
    }
})

module.exports = mongoose.model("profile", profileSchema);
