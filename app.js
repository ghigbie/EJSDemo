var express = require("express");
var app = express();

//this is the root route
app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing.toLowerCase();
    res.render("love.ejs");
});

//the first two arguments are specific to the cloud9 environment
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening...Yay, yay!!!");
});