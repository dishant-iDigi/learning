// document.querySelector("h1").style.color="red";
// single to get and double to set value
$("h1").css("color","red");// set
console.log($("h1").css("color"));// get

$("h1").addClass("big-size margin");

$("h1").text("biee! ");
$("button").html("<em>Button<em>");

console.log($("img").attr("src"));

$("a").attr("href","https://www.yahoo.com")

$(document).keypress(function(event){
    $("h1").text(event.key);
})
