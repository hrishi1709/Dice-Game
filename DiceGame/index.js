var randomNum1 = Math.floor(Math.random()*6)+1;
var randomDiceNum1 = "dice" + randomNum1 + ".png";
var randomImg1 = "images/" + randomDiceNum1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg1);

var randomNum2 = Math.floor(Math.random()*6)+1;
var randomDiceNum2 = "dice" + randomNum2 + ".png";
var randomImg2 = "images/" + randomDiceNum2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "🎊Player1 WINS!"
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "🎊Player2 WINS!"
}
else{
    document.querySelector("h1").innerHTML = "It's a draw!"
}