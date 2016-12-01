var mongoose = require("mongoose");

var bountySchema = mongoose.Schema({
    fName: String,
    lName: String,
    bounty: Number,
    type: String,
    living: Boolean
});

module.exports = mongoose.model("Bounty", bountySchema);

