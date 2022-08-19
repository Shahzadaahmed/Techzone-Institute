// var namesList = ["ahmed", "mehran", "kashan", "shahzaib", 'khurram'];
// // console.log(namesList);

// var randomVal = Math.floor(Math.random() * namesList.length);
// console.log(namesList[randomVal]);

// Note: Learning Local Storage DB...!

var userName = document.getElementById("user-name");
var userEmail = document.getElementById("user-email");

function submitData() {
    var studentOne = {
        myName: userName.value,
        myEmail: userEmail.value
    };

    var studentTwo = {
        myName: "bilal",nc
        myEmail: "bilal@gmail.com"
    };

    console.log("Obj 1: ", studentOne);
    console.log("Obj 2: ", studentTwo);
};