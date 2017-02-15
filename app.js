var express = require("express");
var app = express();

//this is the root route
app.get("/", function(req, res){
    res.render("views/view.ejs");
});

//the first two arguments are specific to the cloud9 environment
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening...Yay, yay!!!");
});