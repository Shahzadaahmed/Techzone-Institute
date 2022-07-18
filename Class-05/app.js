// var name = "ahmed";
// var userInput = prompt("Enter your name ?");
// console.log(userInput);

// if (userInput == "ahmed") {
//     console.log(true);
// }

// else {
//     console.log(false);
// }

// Note: || Or.
// var userInput = prompt("Enter your name ?");

// if ((userInput == "ahmed") || (userInput == "muhammad")) {
//     console.log('Valid Name!');
// }

// else {
//     console.log('Invalid Name!');
// }

// Example # 03:
// Note: &&
// var userInput = prompt("Enter any number ?");

// if (userInput > 5) {
//     console.log(userInput + " is grater than 5");
// }

// else {
//     console.log(userInput + " is not grater than 5");
// }

// if (userInput > 5 && userInput < 10) {
//     console.log("Good!");
// }

// else {
//     console.log("Bad!");
// }

// Example # 06:
/*
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
*/

// Example # 06:
var userInput = prompt("Enter any number or character!");
// console.log(userInput);

if (userInput >= "A" && userInput <= "Z") {
    console.log(userInput, " is an uppercase character!");
}

else if (userInput >= "a" && userInput <= "z") {
    console.log(userInput, " is an lowercase character!");
}

else if ((userInput > 0) || (userInput < 0)) {
    console.log(userInput, " is a number!");
};