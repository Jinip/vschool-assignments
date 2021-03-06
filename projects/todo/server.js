var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/todo", require("./routes/route"));

app.listen(8080, function(){
    console.log("Listening on port 8080");
})