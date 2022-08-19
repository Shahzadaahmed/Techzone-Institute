function fetchDataFromDB() {
    var fetchData = localStorage.getItem("Friends");
    console.log(fetchData);

    var dataInJSON = JSON.parse(fetchData);
    console.log(dataInJSON);

    console.log(dataInJSON[0]);
};