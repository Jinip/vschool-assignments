var express = require("express");
var greeting = require("./greeting");

var app = express();

app.use(greeting);

app.get("/", function(req, res){
    res.send(req.greeting);
})

app.listen("8080", function(){
    console.log("Server listening on port 8080");
})