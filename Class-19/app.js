// var num = "1.9999";
// num = parseInt(num);

// num = parseFloat(num);

// console.log(num);
// console.log(typeof num);

// var num = '12.55';
// var check = !isNaN(num);
// console.log(check);


// var requiredDecimal = 123.456081234567;
// console.log(requiredDecimal.toFixed(0));

// 0, "", NaN, undefined, [], null // Falsy values...!

// var num = 1 + "2";
// console.log(num);

// var integerString = "24";
// var num = Number(integerString);
// console.log(num);

// var num = 24;
// num = String(num);
// console.log(num);
// console.log(typeof num);


// var num = 24;
// num = num.toString();
// console.log(num);
// console.log(typeof num);

// var num = String(70);
// console.log(num);
// console.log(typeof num);



// var percentage = 12.1234567891234567809456;
// console.log(percentage.toFixed(3));


/***** Learning Dates *****/

// var rightNow = new Date();
// console.log(rightNow);

// console.log(typeof rightNow);
// console.log(typeof rightNow.toString()); // For changing data type to string...!


// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var rightNow = new Date();
// console.log(rightNow);

// var day = rightNow.getDay();
// console.log(days[day]); // Day always start with index 0.

// var myDate = new Date("08, July 1996");
// console.log(myDate);

// var arr = new Array('ahmed', 'ali', 'rana');
// console.log(arr);
// console.log(typeof arr);

// var rightNow = new Date();
// console.log(rightNow);

// var currentMonth = rightNow.getMonth();
// console.log(currentMonth);

// var currentDate = rightNow.getDate();
// console.log(currentDate);

var userInput = "ahmed@ali";
var symbolFound = false;

for (var i = 0; i < userInput.length; i++) {
    // console.log(userInput[i]);

    if (userInput[i] == "@") {
        symbolFound = true;
        break;
    };
};

if (symbolFound) {
    console.log("Symbol Found!");
}

else {
    console.log("Symbol Not Found!");
}