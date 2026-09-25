var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var random_number = Math.floor(Math.random() * 4);
    console.log(random_number);

    var randomChosenColour = buttonColours[random_number];
    gamePattern.push(randomChosenColour);
    //   ----- flash code below ---
    $("#" + randomChosenColour).css("background-color", "white");
    setTimeout(function () {
        $("#" + randomChosenColour).css("background-color", "");
    }, 2);
}

nextSequence();
$(".btn").on("click", handler);

function handler(event) {
    console.log("button clicked id stored !");
    var userChosenColour = event.target.id;

    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
}