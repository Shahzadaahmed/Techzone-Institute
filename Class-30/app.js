let apiUrl = "https://jsonplaceholder.typicode.com/users";
let usersList = [];
// let h1 = document.getElementById("h1");

// const renderData = (data) => {
//     // console.log(data);

//     if (data && data.length > 0) {
//         h1.innerHTML = data[0].name;
//     }
// }

const apiCall = () => {
    fetch(apiUrl)
        .then((success) => {
            return success.json();
        })
        .then((actualData) => {
            console.log(actualData);

            if (actualData && actualData.length > 0) {
                usersList = actualData;
                console.log('Users list: ', usersList);
            };
        })
        .catch((err) => {
            console.log("Error found: ", err);
        })
};

apiCall();



let ul = document.getElementById('list');
// let animalsArr = ["lion", "tiger", "elephant", "cat", "mouse"];

ul.innerHTML = usersList.map((item, index) => {
    return (
        `<li> ${item.name} </li>`
    );
}).join('');