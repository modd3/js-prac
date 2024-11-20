var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;
var randDiceImg1 = "dice" + randNum1 + ".png"
var randDiceImg2 = "dice" + randNum2 + ".png"

dice1 = document.querySelector("img.img1");
dice2 = document.querySelector("img.img2");

dice1.setAttribute("src", "./images/" + randDiceImg1);
dice2.setAttribute("src", "./images/" + randDiceImg2);

if (randNum1 > randNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randNum1 < randNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!!";
}