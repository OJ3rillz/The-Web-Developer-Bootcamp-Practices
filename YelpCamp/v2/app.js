var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose")


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

// SCHEMA SETUP 
var camproundSchema = new mongoose.Schema({
      name:String,
      image: String
});

var campgrounds = [
      {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f5c27ba1e4b1b1_340.jpg"},
      {name: "Granite hill", image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104491f5c27ba1e4b1b1_340.jpg"},
      {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e835b20e29f7083ed1584d05fb1d4e97e07ee3d21cac104491f5c27ba1e4b1b1_340.jpg"}
]

app.get("/", function(req, res){
      res.render("landing")
})

app.get("/campgrounds", function(req, res){
      

      res.render("campgrounds",{campgrounds:campgrounds});

});

app.post("/campgrounds", function(req, res){
     var name = req.body.name;
     var image = req.body.image;
     var newCampground = {name: name, image: image}
     campgrounds.push(newCampground);
      //redirect back to the campgrounds page
     res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs");
});

app.listen(3000, function(){
      console.log("Yelpcamp Server has started!");
  });