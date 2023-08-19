var randomNumber1 = Math.floor(Math.random()* 6)+1;
var randomDiceImage = "dice" + randomNumber1 +".png";
var randomImageSource = "images/"+randomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()* 6)+1;
var randomDiceImage1 = "dice" + randomNumber2 +".png";
var randomImageSource1 = "images/"+randomDiceImage1;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource1);

if(randomNumber1 > randomNumber2){
document.querySelector(".container > h1").textContent="Player 1 Wins !";
}else if(randomNumber1 < randomNumber2){
    document.querySelector(".container > h1").textContent="Player 2 Wins !";
}else{
    document.querySelector(".container > h1").textContent="Draw !";
}