var express = require("express");
var app = express();


app.set("view engine", "ejs")


app.get("/", function(req, res){
      res.render("landing")
})

app.get("/campgrounds", function(req, res){
      var campgrounds = [
            {name: "Salmon Creek", image: ""},
            {name: "Granite hill", image: ""},
            {name: "Mountain Goat's Rest", image: ""}
      ]

      res.render("campgrounds");

});

app.listen(3000, function(){
      console.log("Yelpcamp Server has started!");
  });