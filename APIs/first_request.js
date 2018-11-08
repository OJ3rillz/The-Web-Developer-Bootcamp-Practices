

var request = require('request');
request('http://www.googlexccccccc.com', function(error, response, body){
    if(error){
          console.log("something is wrong!");
          console.log(error);
    } else {
          if (response.statusCode == 200){
          //THINGS WORKED!
          console.log(body)
    }
}
});