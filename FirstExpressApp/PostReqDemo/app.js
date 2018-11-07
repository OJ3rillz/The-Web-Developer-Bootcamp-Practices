var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res){
res.render("home");
});

app.post("/addfriend", function(req, res){
    console.log (req.body.newfriend); 
    res.send("YOU HAVE REACHED THE POST ROUTE!!")
});

app.get("/friends", function(req, res){
    
res.render("friends", {friends: friends});
});

app.listen(3000, function(){
      console.log("Server has started");
  });