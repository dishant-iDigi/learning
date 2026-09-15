
var allbtns = document.querySelectorAll(".drum").length;
// for (var i = 0; i < allbtns; i++) {
//      document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

// }
// function handleClick() {
//      document.querySelector(".drum")[i].innerHTML="red";
// }


// 2 method 

// for (var i = 0; i < allbtns; i++) {
//      document.querySelectorAll(".drum")[i].addEventListener("click", function () { alert("i got clicked") });
// }
//  HIGHER ORDER FN ARE THE FN THAT CAN TAKE OTHER FN AS INPUTS


// for making sound on click 
for (var i = 0; i < allbtns; i++) {
     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
          var key = this.innerHTML;
          makesound(key);
          buttonAnimation(key);
     });
}

//  make sound on key press
document.addEventListener("keypress", function (event) {
     // console.log(event);
     makesound(event.key);
     buttonAnimation(event.key);
});



function makesound(key) {
     switch (key) {
          case "w":
               var crash = new Audio("./sounds/crash.mp3");
               crash.play();
               break;
          case "a":
               var kik = new Audio("./sounds/kick-bass.mp3");
               kik.play();
               break;
          case "s":
               var snare = new Audio("./sounds/snare.mp3");
               snare.play();
               break;
          case "d":
               var tom = new Audio("./sounds/tom-1.mp3");
               tom.play();
               break;
          case "j":
               var tom2 = new Audio("./sounds/tom-2.mp3");
               tom2.play();
               break;
          case "k":
               var tom3 = new Audio("./sounds/tom-3.mp3");
               tom3.play();
               break;
          case "l":
               var tom4 = new Audio("./sounds/tom-4.mp3");
               tom4.play();
               break;
          default:

     }
};


//⭐ A callback is a function passed into another function, and the receiving function can call it later and pass data to it.

function buttonAnimation(currentkey) {
     var active_button = document.querySelector("." + currentkey);     
    
     active_button.classList.add("pressed");
     setTimeout(function () {
          active_button.classList.remove("pressed");
     }, 100)
}