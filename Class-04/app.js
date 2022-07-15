/*
var age = prompt("Enter any number!");
// console.log(age);

var smallMessage = "Old Enough";
var adultMessage = "Too Young";

if (age >= 18) {
    console.log(adultMessage);
}

else {
    console.log(smallMessage);
}
*/

/*
// Example # 01:

var userInput = prompt("Enter any number!");
// console.log(userInput);

if (userInput % 3 == 0) {
    console.log(userInput + " is divisible by 3");
}

else {
    console.log(userInput + " is not divisible by 3");
};
*/

// Example # 06:

var userInput = prompt("Enter any number or character!");
// console.log(userInput);

if ((userInput == "A") || (userInput == "B")) {
    console.log(userInput, " is an uppercase character!");
}

else if ((userInput == "a") || (userInput == "b")) {
    console.log(userInput, " is an lowercase character!");
}

else if ((userInput > 0) || (userInput < 0)) {
    console.log(userInput, " is a number!");
};