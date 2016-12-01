var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(express.static(path.join("../public")));

app.use(bodyParser.json());
app.use("/fishes/", require("./routes/fishRoute"));
app.use("/guides/", require("./routes/guideRoute"));

mongoose.connect("mongodb://localhost/fishShop");

app.listen("8080", function(){
    console.log("serving on port 8080");
})