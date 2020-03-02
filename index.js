var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImages = "dice" + randomNumber1 + ".png";
var randomImages = "images/" + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImages);

//==============================//==========================================

var randomNumber2 = Math.floor(Math.random() * 6 + 1); // Refactored code

var randomDiceImages = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImages);

//============================//=============================================

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏁Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🏁player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
