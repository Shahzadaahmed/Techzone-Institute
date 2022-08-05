// Example # 01

/*
var myName = "ahmed";

for (var i = myName.length - 1; i >= 0; i--) {
    console.log(myName[i]);
};
*/

// Example # 02

/*
var num = 5;

if (num < 0) {
    console.log("Number should not be less than 0");
}

else if (num == 1) {
    console.log("Factorial of 1 is 1");
}

else {
    var initialNum = 1;

    for (var i = 1; i <= num; i++) {
        // console.log(initialNum, i);

        initialNum = initialNum * i;
    };
};

console.log(initialNum);
*/

// Example # 03
/*
var myName = "hamza";
var count = 0;

for (var i = 0; i < myName.length; i++) {
    console.log(myName[i]);

    if (myName.charAt(i) == "a") {
        count = count + 1;
    };
};

console.log(count);
*/

// Example # 04

var namesArr = ["ahmed", "kashan", "shahzaib", "muhammad", "ali"];
var newArr = [];
var limitNum = 6;

for (var i = 0; i < namesArr.length; i++) {
    // console.log(namesArr[i]);

    if (namesArr[i].length > limitNum) {
        newArr.push(namesArr[i]);
    };
};

console.log(newArr);