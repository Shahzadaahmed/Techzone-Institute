
/*// Note: CLass example 1:
class UserInfo {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }

    company = "10 Pearls";
    gender = "Male";
    callName = () => {
        console.log(this.name);
    }
};

// Note: CLass example 2
class BilalInfo extends UserInfo {
    constructor(name, title) {
        // super(name, title);

        this.name = name;
        this.title = title
    };
};

var person_1 = new UserInfo("Ahmed", "Software Engr");
person_1.myLocation = "Nazimabad # 01";
console.log(person_1);
person_1.callName();

var person_2 = new BilalInfo("Bilal", "Ui Developer");
console.log(person_2);
person_2.callName();
*/


var userInput = prompt('Enter any number!');
console.log(userInput);
console.log(typeof userInput);

if ((userInput > 0) && (typeof userInput == "number")) {
    console.log(userInput);
}

else {
    console.log(false);
}