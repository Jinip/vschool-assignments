var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

app.use(express.static(path.join("../public")));

app.use(cors());
app.use(bodyParser.json());
app.use("/issues", require("./routes/route"))

app.listen("8080", function(){
    console.log("Server listening on port 8080");
})