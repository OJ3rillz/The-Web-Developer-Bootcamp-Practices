 console.log("CONNECTED");

/* function printReverse(arr){
   for(var i = arr.length - 1; i >= 0; i--){
      console.log(arr[i]);
   }
}

printReverse([3,6,2,5]);
 */

//*** isUniform() */

/* function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
} */

//** sumArray() */

/* function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
} */

//**max() */
/* function max(arr){
    var max = arr[0];
    for(var i= 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}  */

/* 
const allStates = [
    "Abia",
    "Adamawa",
    "Anambra",
    "Akwa Ibom",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Enugu",
    "Edo",
    "Ekiti",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
  ];

  const sortByNameLength = 
  (states) => {
      return states[20];
  }

  const sorted = 
  sortByNameLength(allStates);
  
     console.log(sorted); */
 let  array = [
        "Abia",
        "Adamawa",
        "Anambra",
        "Akwa Ibom",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Enugu",
        "Edo",
        "Ekiti",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
      ];

array.sort((a, b) => b.length - a.length);

console.log (JSON.stringify(array, null, "\t"));