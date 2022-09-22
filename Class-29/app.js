// const myName = "ahmed";
// myName = "muhammad";
// console.log(myName);

/*
const variablesTesting = () => {
    var a = "ahmed";

    if (a == "ahmed") {
        console.log(a);

        var b = "Hello";
        console.log(b, a);
    };

    console.log(b);
};

variablesTesting();
*/

// var myName = "ahmed";
// var myName = "ahmed";
// console.log(myName);

// let myName = "ahmed";
// myName = "muhammad";
// console.log(myName);

// var callMyName = () => { return "ahmed" };
// console.log(callMyName());

// setTimeout(
//     () => {},
//     1000
// );

// // Sync Example:
// console.log('Run 1');
// testing();

// function testing() {
//     console.log("Fuction is running!");
// }

// console.log('Run 2');
// testing();




// Async Example:
// console.log('Run 1');
// testing();

// function testing() {
//     setTimeout(() => {
//         console.log("Fuction is running!");
//     }, 3000);
// }

// console.log('Run 2');
// testing();


// Promises...!

// let firstPromise = new Promise((resolve, reject) => {
//     let myName = "ahmedsjdgusd";

//     if (myName == "ahmed") {
//         resolve("Name found successfully!");
//     }

//     else {
//         reject("Invalid Name!");
//     }
// });

// firstPromise
//     .then((success) => {
//         console.log(success);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

/*
let checkEvenNums = new Promise((resolve, reject) => {
    let userInput = Number(prompt("Enter any number!"));

    if (userInput % 2 == 0) {
        resolve(`${userInput} is divisible by zero!`);
    }

    else {
        reject(`${userInput} is not divisible by zero!`);
    }
});

checkEvenNums
    .then((success) => {
        console.log(success);
    })
    .catch((err) => {
        console.log(err);
    });
    ^
    */

let userInfo = {
    myName: "Ahmed",
    myTitle: "Software Engineer"
};
console.log(userInfo);

let dataInStr = JSON.stringify(userInfo);
// console.log(dataInStr);

localStorage.setItem("User", dataInStr);

const moveToNextloc = () => {
    if (localStorage.getItem("User") != null) {
        location = "./contact/contact.html";
    }

    else {
        console.log("Data Not Found!");
    }
};