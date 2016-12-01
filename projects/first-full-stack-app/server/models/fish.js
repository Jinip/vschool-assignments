var mongoose = require("mongoose");

var fishSchema = new mongoose.Schema({
    commonName: String,
    scientificName: String,
    type: String,
    subType: String,
    temperment: String,
    price: Number
});

module.exports = mongoose.model("fish", fishSchema);