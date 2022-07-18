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
// var userInput = prompt("Enter any number or character!");
// // console.log(userInput);

// if (userInput >= "A" && userInput <= "Z") {
//     console.log(userInput, " is an uppercase character!");
// }

// else if (userInput >= "a" && userInput <= "z") {
//     console.log(userInput, " is an lowercase character!");
// }

// else if ((userInput > 0) || (userInput < 0)) {
//     console.log(userInput, " is a number!");
// };

// var useInput = prompt("Enter any number!");
// // console.log(useInput);

// if (useInput % 3 == 0) {
//     console.log(useInput + " is divisible by 3!");
// }

// else {
//     console.log(useInput + " is not divisible by 3!");
// }

// var num1 = Number(prompt("Enter any number!"));
// var num2 = Number(prompt("Enter any another number!"));
// var operator = prompt("Enter operator");
// var result;

// if (operator == "+") {
//     result = num1 + num2;
//     console.log(result);
// }

// else {
//     console.log(false);
// }

// var palindrome = prompt("Enter any word to check it is palindrome or not!");
// var palindromeFormula = palindrome.split("").reverse().join("");

// if (palindrome == palindromeFormula) {
//     console.log("This is palindrome!");
// }

// else {
//     console.log("This is not palindrome!");
// }

var userName = prompt("Enter your name");
var heading = document.getElementById("heading");
heading.innerHTML = userName;