$(document).ready(function(){

//VARIABLES//

var bluegem = "";
var greengem = "";
var purplegem = "";
var pinkgem = "";

var targetnum = "";
var sofarnum = 0;

var win = 0;
var lose = 0;

//generate a random number and display
targetnum = Math.floor((Math.random() * 101) + 19);
$(".random").text(targetnum);
$(".count").text(sofarnum);
$(".win").text(win);
$(".lose").text(lose);


//generate random values between __ and __ for each gem
bluegem = Math.floor((Math.random() * 12) + 1);
greengem = Math.floor((Math.random() * 12) + 1);
purplegem = Math.floor((Math.random() * 12) + 1);
pinkgem = Math.floor((Math.random() * 12) + 1);

//check values for testing
console.log(bluegem, greengem, purplegem, pinkgem);

//when a gem is clicked, add that value to the sofarnum and re-write to page
$("#bluegem").on("click", function() {
	sofarnum = parseInt(bluegem + sofarnum);
	$(".count").text(sofarnum)
});
$("#greengem").on("click", function() {
	sofarnum = parseInt(greengem + sofarnum);
	$(".count").text(sofarnum)
});
$("#purplegem").on("click", function() {
	sofarnum = parseInt(purplegem + sofarnum);
	$(".count").text(sofarnum)
});
$("#pinkgem").on("click", function() {
	sofarnum = parseInt(pinkgem + sofarnum);
	$(".count").text(sofarnum)
});

//if sofarnum > targetnum, increase lose count and reset other variables
if (sofarnum > targetnum) {
	alert("You lose! Try again?");
	$(".lose").text(lose++);
	//reset
	targetnum = Math.floor((Math.random() * 101) + 19);
	$(".random").text(targetnum);
	sofarnum = 0;
	$(".count").text(sofarnum);
	bluegem = Math.floor((Math.random() * 12) + 1);
	greengem = Math.floor((Math.random() * 12) + 1);
	purplegem = Math.floor((Math.random() * 12) + 1);
	pinkgem = Math.floor((Math.random() * 12) + 1);
	console.log(bluegem, greengem, purplegem, pinkgem);
}

//if sofarnum = targetnum, increase win count and reset other variables
if (sofarnum === targetnum) {
	alert("You won! Play again?");
	$(".win").text(win++);
	//reset
	targetnum = Math.floor((Math.random() * 101) + 19);
	$(".random").text(targetnum);
	sofarnum = 0;
	$(".count").text(sofarnum);
	bluegem = Math.floor((Math.random() * 12) + 1);
	greengem = Math.floor((Math.random() * 12) + 1);
	purplegem = Math.floor((Math.random() * 12) + 1);
	pinkgem = Math.floor((Math.random() * 12) + 1);
	console.log(bluegem, greengem, purplegem, pinkgem);
}

});