var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

var app = express();

app.use(express.static(path.join("../public")));

app.use(bodyParser.json());
app.use("/issues", require("./routes/route"))

mongoose.connect("mongodb://localhost/issues");

app.listen("8080", function(){
    console.log("Server listening on port 8080");
})