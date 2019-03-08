var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set('view engine', 'ejs'); 

//ROUTES

//==============

app.get("/", function(req, res){
      res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

//Auth Routes

app.listen(3000, function(){
      console.log("App has started");
  });
