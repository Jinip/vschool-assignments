var mongoose = require("mongoose");

var replySchema = new mongoose.Schema({
    userName: String,
    timeStamp: Date,
    body: String
})

var commentSchema = new mongoose.Schema({
    userName: String,
    timeStamp: Date,
    body: String,
    replies: [replySchema]
})

var guideSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    timeStamp: Date,
    body: String,
    comments: [commentSchema]
});

module.exports = mongoose.model("guide", guideSchema);