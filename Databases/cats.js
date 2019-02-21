var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app")

var catSchema = new mongoose.Schema({
      name: String,
      age: Number,
      temperament: String
});

  var Cat = mongoose.model("Cat", catSchema);
// adding a new cat to the DB
//var george = new Cat({
//name: "Mrs Norris",
//age: "7",
//temperament: "Evil"
//});

//george.save(function(err, cat){
  //   if(err){
    //       console.log("SOMETHING WENT WRONG!")
     //} else {
       //    console.log("We just saved a cat to the db:")
         //  console.log(cat);
     //}
//});
Cat.create()

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
      if (err){
            console.log("OH NO, ERROr!");
            console.log(err);
      } else {
            console.log("ALL THE CATS.......");
            console.log(cats);
      }
});