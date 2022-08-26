// var myName = 'ahmed';
// myName = "muhamad ahmed";

// var num = "1996";
// var anotherNum = 8;

// console.log(num);
// console.log(typeof num);
// console.log(anotherNum);
// console.log(typeof anotherNum);

// var firstNum = 6;
// var secondNum = 4;
// var addition = firstNum + secondNum;
// var subtraction = firstNum - secondNum;
// console.log(subtraction);

// var _myName = "ahmed";
// console.log(_myName);

// var addValues = 2 + 2;
// console.log(addValues);

// var myPersentage = 771 * 100 / 850;
// console.log(myPersentage);

// var remindVal = 10 % 3;
// console.log(remindVal);

// var num = 2;
// num = num + 1;
// console.log(++num);

// var num = 3;
// console.log(num++);

// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// var num = 6;
// console.log(--num);

// var num = 7;
// console.log(num--);

// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }

// var cond = (2 + 2) * 3;
// console.log(cond);

// var firstName = "shahzada";
// var lastName = "muhammad";
// var fullName = firstName + " " + lastName + " ahmed " + "rana";
// console.log(fullName);

// var userInput = prompt("Enter your name!", "ahmed");
// console.log(userInput);

/*
Program # 03:
 Write a program to take password as an input from user. The password must qualify these requirements:
a. It should contain alphabets and numbers.
b. It should not start with a number.
c. It must at least 8 characters long.
d. If the password does not meet the above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9.
*/

// Solution:
/*
var regexExForChars = /[a-zA-Z]/;
var regexExForNums = /[0-9]/;
var userInput = prompt("Enter your password");

if (!userInput.match(regexExForChars)) {
    alert("Password should contain alphabets! 😠");
}

else if (!userInput.match(regexExForNums)) {
    alert("Password should contain numbers! 😠");
}

else if (!isNaN(userInput.charAt(0))) {
    alert("Password should not start with a number! 😠");
}

else if (userInput.length < 8) {
    alert("Password must at least 8 characters long! 😠");
}

else {
    console.log('Your password is approved! 🥰');
};
*/

/*
Program # 10:
Write a program that round a number to a given decimal places.

a: Input: 17.765 , 2 => Output: 16.77
b: Input: 12.37982 , 2 => Output: 12.38
c: Input: -9.3079499 , 4 => Output: -9.3079
*/

// Solution:
// a:
// var num1 = 17.765;
// var check1 = num1.toFixed(2);
// console.log(check1);

// b:
// var num2 = 12.37982;
// var check2 = num2.toFixed(2);
// console.log(check2);

// c:
// var num3 = -9.3079499;
// var check3 = num3.toFixed(4);
// console.log(check3);