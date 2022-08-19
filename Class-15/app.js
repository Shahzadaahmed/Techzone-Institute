/*
var userObj = {
    name: "ahmed",
    fatherName: "munawar",
    qualification: "BS.CS",
    company: "QBS Tech",
    title: "Software Engineer"
}
// console.log(userObj);
// console.log(typeof userObj);

// console.log(userObj.title);

userObj.name = "shahzada muhammad ahmed rana";
// console.log(userObj);

var employeeData = {
    name: "bilal",
    fatherName: "xyz",
    qualification: "BS.CS",
    company: "QBS Tech",
    title: "Jr. Software Engineer"
}
// console.log(employeeData);

userObj.myLocation = "Nazimabad # 01";
employeeData.myLocation = "Gulistan e Johar";

delete employeeData.fatherName;

// console.log(userObj);
// console.log(employeeData);

// var propertyExists = "ahmed" in employeeData; // old way to check property in obj.
// var propertyExists = employeeData.hasOwnProperty("title"); // updated way to check property in obj.
// console.log(propertyExists);

// if (employeeData.hasOwnProperty("fatherName")) {
//     console.log("Property exist is the obj!");
// }

// else {
//     console.log("Property does not exist is the obj!");
// }
*/
/*
var obj = {};
obj.name = "ahmed";
obj.fatherName = "munawar";
obj.company = "QBS Tech";
obj.title = "Software Engineer";
// console.log(obj);

console.log("Hi, My name is " + obj.name + " , my father name is " + obj.fatherName + " , i worked for the company " + obj.company);
*/

var userName = document.getElementById("user-name");
var userEmail = document.getElementById("user-email");

function submitData() {
    var user = {
        myName: userName.value,
        myEmail: userEmail.value
    };

    if ((user.myName == "") || (user.myEmail == "")) {
        alert("Both fields are required!");
    }

    else {
        console.log(user);
        document.getElementById("user-name").value = "";
        document.getElementById("user-email").value = "";
    }
};