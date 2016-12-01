var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    sex: String,
    age: Number,
    height: Number,
    weight: Number,
    physicalActivity: String,
    allergies: Array
})

module.exports = mongoose.model("user", userSchema);