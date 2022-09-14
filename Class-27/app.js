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

/*
var emailEl = document.getElementById("email");
var passwordEl = document.getElementById("password");
var errorMessageBox = document.getElementById("error-box");
var errorMessages = {
    emailMessage: "Invalid Email Address",
    passwordMessage : "Atleast 6 characters are required!"
};

// NOte: Function to hide error message after 3 secs...!
const hideErrMessages = () => {
    setTimeout(
        () => {
            errorMessageBox.style.display = "none";
            errorMessageBox.innerHTML = "";
        },
        3000
    );
};

// Note: Function to clear form...!
const clearAll = () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
};

const submitForm = () => {
    var userInfo = {
        email: emailEl.value,
        password: passwordEl.value
    };
    // console.log(userInfo);

    if (userInfo.email.trim().length < 1) {
        errorMessageBox.style.display = "block";
        errorMessageBox.innerHTML = errorMessages.emailMessage;
        hideErrMessages();
    }

    else if (userInfo.password.length <= 6) {
        errorMessageBox.style.display = "block";
        errorMessageBox.innerHTML = errorMessages.passwordMessage;
        hideErrMessages();
    }

    else {
        console.log(userInfo);
        clearAll();
    };
};
*/

// var h1 = document.getElementById("h1");
// // console.log(h1);

// setTimeout(
//     () => {
//         h1.innerHTML = "ahmed";
//     },
//     5000
// );



// var num = 0;

// var handleInterval = setInterval(
//     () => {
//         num = num + 1;
//         console.log(num);

//         if (num == 10) {
//             clearInterval(handleInterval);
//         }
//     },
//     1000
// );

// var animalHeading = document.getElementById("animal-heading");
// var animals = new Array("Lion", "TIger", 'Elephant', 'Zebra', "Dog");
// // console.log(animals);

// setInterval(
//     () => {
//         var randomNum = Math.floor(Math.random() * animals.length);
//         console.log(animals[randomNum]);
//     },
//     1000
// );