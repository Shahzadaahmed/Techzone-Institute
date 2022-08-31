// function greetUser(name) {
//     console.log("Hi", name);
// };

// greetUser("ahmed");
// greetUser("asif");
// greetUser("mohsin");
// greetUser();

// function addition(num1, num2) {
//     // console.log(num1, num2);

//     var addData = num1 + num2;
//     console.log(addData);
// };

// addition(2, 4);





// function helloUser() {
//     var greeting = "Welsome to JS World!";
//     return greeting;
// };

// var result = helloUser();
// console.log(result);








// function subtraction(num1, num2) {
//     return num1 - num2;
// }

// var result = subtraction(10, 6);
// console.log(result);



// function testingCondition(userName) {
//     if (userName == "ahmed") {
//         return "Class on!";
//     }

//     else {
//         return "Class off!";
//     }
// }

// var result = testingCondition("mahmed");
// console.log(result);




// function userInfo(ahmedata) {
//     console.log(ahmedata);
// }

// let myData = {
//     myName: "ahmed",
//     title: "Software Engr"
// };

// userInfo(myData);

// function greetUser() {
//     return "Hello";
// };

// function callName(name, handler) {
//     console.log(handler(), name);
// };

// callName("asif", greetUser);










// function testing(data) {
//     console.log(data);
// }

// var myData = {
//     name: "ahmed",
//     title: "Software Engr"
// };

// testing(myData.name);

// a2 - (2ab) + b2





// Note: Solve the equation: a2 - (2ab) + b2




// function handleSquareValue(num) {
//     return num * num;
// };

// function solveEquation(a, b, squareHandler) {
//     var equation = squareHandler(a) - (2 * a * b) + squareHandler(b);
//     return equation
// }

// var result = solveEquation(4, 2, handleSquareValue);
// console.log(result);

// // (a + b + c)2 = a2 + b2 + c2 +2ab+2bc +2ca

// Note: Solve the equation: a2 - (2ab) + b2

function squareValue(num) {
    return num * num;
};

function solveEquation(a, b, squareHandler) {
    var equation = squareHandler(a) - (2 * a * b) + squareHandler(b);
    return equation;
};

var result = solveEquation(4, 2, squareValue);
console.log(result);