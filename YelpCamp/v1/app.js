var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")


app.get("/", function(req, res){
      res.render("landing")
})

app.get("/campgrounds", function(req, res){
      var campgrounds = [
            {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f5c27ba1e4b1b1_340.jpg"},
            {name: "Granite hill", image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104491f5c27ba1e4b1b1_340.jpg"},
            {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e835b20e29f7083ed1584d05fb1d4e97e07ee3d21cac104491f5c27ba1e4b1b1_340.jpg"}
      ]

      res.render("campgrounds",{campgrounds:campgrounds});

});

app.post("/campgrounds", function(req, res){
        res.send("YOU HIT THE POST ROUTE!")
});

app.get("/campgrounds/new" function(req, res){
   res.render("new.ejs");
});

app.listen(3000, function(){
      console.log("Yelpcamp Server has started!");
  });