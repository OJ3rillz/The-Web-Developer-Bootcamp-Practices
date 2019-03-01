var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_campv3");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var Campground = mongoose.model("Campground", campgroundSchema);

//Campground.create(
 //     { 
  //      name: "Salmon Creek", 
    //    image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f5c27ba1e4b1b1_340.jpg"
      //}, function(err, campground){
        //    if (err){
          //        console.log(err);
            //} else{
              //    console.log("NEWLY CREATED CAMPGROUND: ");
                //  console.log(campground);
            //}
     // });

app.get("/", function(req, res){
      res.render("landing")
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB      
    Campground.find({}, function(err, allCampgrounds){
          if (err){
                console.log(err);
          } else {
                res.render("index",{campground:allCampgrounds});
          }
    });
});

//CREATE - add new campgrounds to DB
app.post("/campgrounds", function(req, res){
// get data from form and add to campgrounds array
     var name = req.body.name;
     var image = req.body.image;
     var desc = req.body.description;
     var newCampground = {name: name, image: image, description: desc}
     // Create a new campgorund and save to DB
     Campground.create(newCampground, function(err, newlyCreated){
           if(err){
                 console.log(err);
           } else{
              //redirect back to campgrounds page
              res.redirect("/campgrounds");
        }
     });
});
     campgrounds.push(newCampground);
      //redirect back to the campgrounds page
     res.redirect("/campgrounds");
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs");
});



app.listen(3000, function(){
      console.log("Yelpcamp Server has started!");
  });