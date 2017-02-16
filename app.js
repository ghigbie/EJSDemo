var express = require("express");
var app = express();

//this is the root route
app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing.toLowerCase();
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Cats are awesome 2", author: "Beth"},
        {title: "Cows are awesome 3", author: "Jill"},
        {title: "Dogs are cool too 4", author: "Nat"},
     ];
     
     res.render("posts.ejs", {posts: posts});
});

//the first two arguments are specific to the cloud9 environment
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening...Yay, yay!!!");
});