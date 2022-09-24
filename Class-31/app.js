/*
let userInput = prompt("Enter your name!");
// console.log(userInput);

try {
    if (userInput == "ahmed") {
        console.log(userInput);
    }

    else if (userInput == "today") {
        throw "Last class!";
    }

    else {
        throw "Invalid name!";
    }
}

catch (err) {
    console.log("Error found: ", err);
};
*/

// let apiUrl = "https://jsonplaceholder.typicode.com/users";

// const apiCall = async () => {
//     try {
//         let response = await fetch(apiUrl);
//         let actualData = await response.json();
//         console.log(actualData);
//     }

//     catch (error) {
//         console.log("Error found: ", error);
//     };
// };

// apiCall();

let userInput = prompt("Enter your name!");
// console.log(userInput);

// if (userInput == "ahmed") console.log(userInput);
// else if (userInput == "today") {
//     console.log("Last class!");
//     console.log("Last class!");
// }
// else console.log('Invalid Input!');

let age = 24;

let result =
    (userInput == "ahmed")
        ?
        (
            (age == 25)
                ?
                (true)
                :
                (false)
        )
        :
        ('Incorrect');
console.log(result);