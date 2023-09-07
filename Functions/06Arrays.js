var countries = ["Nigeria", "Namibia", "Ghana", "Togo", "Egypt"];
// console.log(countries.length);

var states = new Array("Yobe", "Imo", "Abia", "Rivers", "Ondo");

// console.log(states.length);

states[0] = "Gombe";   //Replaces the first value "Yobe"...
// console.log(states);


var user = ["pascal", "pascal.amah10@gmail.com", 5, 28, true];
// console.log(user);

user.pop(); //Gets rid of the value at the end...
user.pop();
user.pop();
// console.log(user);

user.unshift("New Value");  //Adds a new value to the array and shifts all other....
// console.log(user);

user.shift(); 
// console.log(user);

console.log(user.indexOf("pascal")); //Gives position of a particular value...

console.log(Array.from("pascal")); //Converts strings to arrays...
