// var myName = "aHmEd";

// var firstChar = myName.charAt(0).toUpperCase();
// // console.log(firstChar);

// var remainingChars = myName.slice(1).toLowerCase();
// // console.log(remainingChars);

// var capitalize = firstChar + remainingChars;
// console.log(capitalize);

// var monthName = prompt("Enter any month!");
// // console.log(monthName.length);
// var monthAbb = undefined;

// if (monthName.length >= 3) {
//     monthAbb = monthName.slice(0, 3);
//     console.log(monthAbb);
// }

// var str = prompt("Enter some text");
// console.log(str);

// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === " ") {
//         alert("No double spaces!");
//         break;
//     };
// };

// for (var i = 0; i < str.length; i++) {
//     // console.log(str[i]);

//     if (str.charAt(i) == " ") {
//         alert("Space found!");
//         break;
//     };
// };

// var animalName = "lion";
// var updateName = animalName.replace("o", "z");
// console.log(updateName);;

// var para = "welcome to the class welcome to the class";
// var updatePara = para.replace(/to the/g, "in");
// console.log(updatePara);

// var userInput = "03142117550";
// var mobileNoValidator = /^(\+92|0|92)(3)(\d{2})\)?(\d{7})$/gm;

// if (userInput.match(mobileNoValidator)) {
//     console.log("Number is correct!");
// }

// else {
//     console.log("Number is not correct!");
// };

// let emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


var userInput = document.getElementById("user-input");
var headingEl = document.getElementById("heading");

function submitForm() {
    if (userInput.value.trim().length > 0) {
        // console.log(userInput.value);
        headingEl.innerHTML = userInput.value * 2;
    }

    else {
        alert("Please write something!");
    }
};

// var trimValue = " ahmed     ";
// console.log(trimValue.trim());
// console.log(trimValue.trim().length);