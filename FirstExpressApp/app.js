var express = require("express");
var app = express();


app.get("/", function(req, res){
      res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});
 
 // "/dog" ==> "MEOW!
app.get("/dog", function(req, res){
res.send("meaw");
});

app.get("/pig", function(req, res){
    res.send("bleh");
    });

app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!!");
    });


app.listen(3000, function(){
    console.log("Server has started");
});


