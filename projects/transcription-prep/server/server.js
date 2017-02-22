var express = require("express");
var path = require("path");
var port = process.env.port || 8080;
var config = require("./config");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
var mongoose = require("mongoose");
var morgan = require("morgan");

var app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/")
mongoose.connect(config.database.path, function(err){
    if (err) return console.log(err);
    console.log("Connected to database " + config.database.name);
})

app.listen(port, function(err){
    if (err) return console.log(err);
    console.log("Serving on port " + port);
})