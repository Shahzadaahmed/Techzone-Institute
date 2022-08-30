/*
var rightNow = new Date();
// console.log(rightNow);

var day = rightNow.getDay();
// console.log(day);

var month = rightNow.getMonth();
// console.log(month);

var year = rightNow.getFullYear();
// console.log(year);

var hour = rightNow.getHours();
// console.log(hour);

var mins = rightNow.getMinutes();
// console.log(mins);

var seconds = rightNow.getSeconds();
// console.log(seconds);

var mls = rightNow.getMilliseconds();
// console.log(mls);

var dataInMs = rightNow.getTime();
// console.log(dataInMs);

var date = rightNow.getDate();
// console.log(date);

var pkDay = new Date("14 August 1947");
// console.log(pkDay);
*/

// Program # 01: How many days have beens passed since my birthday....!
/*
var today = new Date();
// console.log(today);

var birthDay = new Date("08 July 1996");
// console.log(birthDay);

// Note: Converting both dates in mili seconds...!
var todayInMs = today.getTime();
// console.log(todayInMs);

var birthdayInMs = birthDay.getTime();
// console.log(birthdayInMs);

// Calculate days...!
var calculateDays = todayInMs - birthdayInMs
// console.log(calculateDays);

var formulaToFindDays = calculateDays / (1000 * 60 * 60 * 24);
formulaToFindDays = Math.floor(formulaToFindDays);
console.log(formulaToFindDays);
*/

// How many years passed since i was born...!

/*
var today = new Date();
// console.log(today);

var birthDate = new Date("08 July 1996");
// console.log(birthDate);

var currentYear = today.getFullYear();
// console.log(currentYear);

var birthyear = birthDate.getFullYear();
// console.log(birthyear);

var calculateYears = currentYear - birthyear;
console.log(calculateYears);
*/

// var today = new Date();
// var futureTime = new Date("29 August 2022 23:00:00");

// var todayHrs = today.getHours();
// var futureHrs = futureTime.getHours();

// var calclateHrs = futureHrs - todayHrs;
// console.log(calclateHrs);








// var today = new Date();
// var futureTime = new Date("30 August 2022 10:00:00");

// var todayInMs = today.getTime();
// var futureTimeInMs = futureTime.getTime();

// var calculateHrs = futureTimeInMs - todayInMs;
// // console.log(calculateHrs);

// var formulaToFindHrs = calculateHrs / (1000 * 60 * 60);
// formulaToFindHrs = Math.floor(formulaToFindHrs);
// console.log(formulaToFindHrs);

// var userInput = document.getElementById("user-input");

// function submitData() {
//     // console.log(userInput.value);

//     var date = new Date(userInput.value);
//     console.log(date);
// };

// function greetUser(parameter) {
//     console.log(parameter);
// };

// greetUser("biryani");
// greetUser("Paratha");
// greetUser("Drinks");
// greetUser("Chai");
// greetUser();









function callUser(fName, lname) {
    console.log(fName + " " + lname);
};

callUser("muhammad", "ahmed");
callUser("muhammad");