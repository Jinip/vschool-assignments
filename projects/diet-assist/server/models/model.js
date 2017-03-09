var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
    
})

module.exports = mongoose.model("model", modelSchema);