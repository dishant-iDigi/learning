var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

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

