
var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;

var imgsrc1 = "./images/dice" + d1 + ".png";

document.querySelector(".dice .img1").setAttribute("src", imgsrc1);
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + d2 + ".png");// follows array based on element's



if (d1 > d2) {
    document.querySelector("h2").innerHTML = "Player 1 won the game ";
} else if (d1 < d2) {
    document.querySelector("h2").innerHTML = "Player 2 won the game ";

} else {    
    document.querySelector("h2").innerHTML = "GAME DRAW !! ";

}