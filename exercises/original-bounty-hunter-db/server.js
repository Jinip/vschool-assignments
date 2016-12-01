var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

var app = express();

app.use(bodyParser.json());
app.use("/bounties", require("./routes/route"));
app.use(express.static(path.join("public")));

mongoose.connect("mongodb://localhost/bounties")

app.listen(8000, function () {
    console.log("Server listening on port 8000");
})