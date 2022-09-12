// var myData = {
//     mName: "Ahmed",
//     title: "Software Engr"
// };
// // myData.company = "10 Pearls";

// console.log(myData);

// var anotherData = {
//     mName: "uzair",
//     title: "Software Engr"
// };

// console.log(anotherData);

// var date = new Date();
// console.log(date.toLocaleTimeString());
// console.log(typeof date);

// Note: Constructor function...!




/*
function Person(firstName, lastName, age, company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.company = company;

};

var person1 = new Person("muhammad", "ahmed", "25", "10 pearls");
person1.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
console.log(`Hi, ${person1.fullName()}`);

// var person2 = new Person("syed", "kashan", "24", "Dilpasand");
// person2.department = "IT";
// console.log(person2);*/

/*
var myInfo = {
    myName: "ahmed",
    title: "Software Engineer",
    company: "10 Pearls",
    myLocation: "Nazimbad # 01",
    hasLaptop: false
};

console.log(myInfo);

// var propExist = "ahmed" in myInfo;
// console.log(propExist);

for (var prop in myInfo) {
    console.log(prop);
};
*/















// Es5 moethod...!
// function greetUser() {
//     console.log("Hello ahmed!")
// };

// greetUser()

// Es6 moethod...!
// const greetUser = (name) => {
//     console.log(`Hi, ${name}`);
// };

// greetUser("ahmed");

// Es7 method...!
// let greetUser = (name) => console.log(`Hi, ${name}`);
// greetUser("ahmed");



// Note: setTimeOut();

var h1 = document.getElementById("h1");

// setTimeout(
//     () => {
//         // h1.style.display = "none";
//         h1.innerHTML = "CHutti";
//     },
//     5000
// );

// Note: setInterval();
// setInterval(
//     () => {
//         console.log("Hello ahmed");
//     },
//     3000
// );

// var date = new Date();
// console.log(date);

setInterval(
    () => {
        var date = new Date();
        h1.innerHTML = date.toLocaleTimeString();
    },
    1000
);