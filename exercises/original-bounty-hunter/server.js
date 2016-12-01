var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/bounties", require("./routes/route"));

app.listen(8000, function () {
    console.log("Server listening on port 8000");
})