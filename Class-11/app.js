// var myName = "ahmed";
// var symbolFound = false;

// for (var i = 0; i < myName.length; i++) {
//     // console.log(myName[i]);

//     if (myName.charAt(i) == "!") {
//         symbolFound = true;
//         break;
//     };
// };

// if (symbolFound) {
//     console.log("Symbod found!");
// }

// else {
//     console.log("Symbod not found!");
// };

// var myName = "ahmed";

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (var i = 10; i >= 5; i--) {
//     console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
//     console.log(i);

//     if (i == "6") {
//         break;
//     };
// };

// var arr = ["ahmed", "mehran", "kashan", "shahzaib", "khurram"];
// var myName = "ahm!ed";
// var symbolFound = false;

// for (var i = 0; i < arr.length; i++) {
//     console.log(i, arr[i]);
// }

// for (var i = 0; i < myName.length; i++) {
//     console.log(i, myName[i]);

//     if (myName.charAt(i) == "!") {
//         symbolFound = true;
//         break;
//     };
// };

// if (symbolFound) {
//     console.log('Symbol found!');
// }

// else {
//     console.log('Symbol not found!');
// }

// var h1 = document.getElementsByTagName("h1");
// // console.log(h1);

// for (var i = 0; i < h1.length; i++) {
//     // console.log(h1[i]);

//     h1[i].className = "Link " + i;
// }

var h1 = document.getElementsByTagName("h1");
// console.log(h1);

for (var i = 0; i < h1.length; i++) {
    // console.log(h1[i]);

    h1[i].id = "Link-" + i;
}