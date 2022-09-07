
// Note: Get required elements from HTML file...!
var coinsEl = document.getElementById("coins");
var messageEl = document.getElementById("message");
var userBidAmount = document.getElementById("bid-amount");
var userBidNum = document.getElementById("bid-num");
var playBtn = document.getElementById("play-btn");
var diceEl = document.getElementById("dice");

// Note: Initialzed required variables...!
var coins = 1000;
coinsEl.innerHTML = coins;

// Note: Function to handle validation...!
function validateHandler() {
    if (!userBidAmount.value || !userBidNum.value) {
        alert("Both fields are required");
        return false;
    }

    else {
        return true;
    };
};

// Note: Function to play game...!
function playGame() {
    if (coins > 0) {
        if (validateHandler()) {
            var randomDice = Math.floor(Math.random() * 6) + 1;
            diceEl.style.display = "block";
            diceEl.src = `./images/Dice${randomDice}.png`;

            if (randomDice == Number(userBidNum.value)) {
                coins = coins + Number(userBidAmount.value);
                coinsEl.innerHTML = coins;
                messageEl.innerHTML = `Coungratulation! You won the bid. ${userBidAmount.value} added in your acount!`;
            }

            else {
                coins = coins - Number(userBidAmount.value);
                coinsEl.innerHTML = coins;
                messageEl.innerHTML = `Sorry You Lost! ${userBidAmount.value} deducted from your acount!`;
            };
        };
    }

    else {
        playBtn.disabled = true;
    };
};

// var h1Tags = document.getElementsByTagName("h1");
// // console.log(h1Tags);
// // h1Tags[0].innerHTML = "ahmed";

// for (var i = 0; i < h1Tags.length; i++) {
//     // console.log(h1Tags[i]);
//     h1Tags[i].style.color = "blue";
// }

// var h1 = document.getElementsByTagName("h1");
// console.log(h1[0]);
// h1[0].setAttribute("class" , "ahmed");