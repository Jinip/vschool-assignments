var mongoose = require("mongoose");

var issueSchema = new mongoose.Schema({
    title: String,
    description: String,
    votes: {
        upvotes: Number,
        downvotes: Number,
    }
});

module.exports = mongoose.model("Issue", issueSchema);