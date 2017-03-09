var express = require("express");
var bodyParser = require("body-parser");
var expressJwt = require("express-jwt");
var mongoose = require("mongoose");

var config = require("./config");
var path = require("path");
var port = process.argv[2] || 8080;

var app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(bodyParser.json());

app.use("/auth/", require("./routes/auth"));
app.use("/recipes/", require("./routes/recipe"));
app.use("/api/", expressJwt({secret: config.secret}));
app.use("/api/endpoint/", require("./routes/route"));


mongoose.connect(config.database);

app.listen(port, function(){
    console.log("Serving on port 8080");
})