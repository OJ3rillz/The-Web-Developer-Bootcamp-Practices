var express = require("express"),

mongoose = require("mongoose"),
passport = require("passport"),
bodyParser = require("body-parser"),
User = require("./models/user"),
LocalStrategy = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose")

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES

//==============

app.get("/", function(req, res){
      res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

//Auth Routes


//show sign up form
app.get("/register", function(req, res){
    res.render("register");
});

//handling user sign up
app.post("/register", function(req, res){
      req.body.username
      req.body.password
})

app.listen(3000, function(){
      console.log("App has started");
  });
