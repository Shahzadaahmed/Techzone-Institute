let db = localStorage.getItem("User");
console.log(db);

let dataInJSON = JSON.parse(db);
console.log(dataInJSON);

const clearData = () => {
    localStorage.clear();
}