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
var gameOver = true;

function winLose() {
	//if sofarnum > targetnum, increase lose count and reset other variables
	if (sofarnum > targetnum) {
		$(".lose").text(++lose);
		gameOver = true;
		alert("You lose! Try again?");
	}
	//if sofarnum = targetnum, increase win count and reset other variables
	if (sofarnum === targetnum) {
		$(".win").text(++win);
		gameOver = true;
		alert("You won! Play again?");
	}
}

	//set &/or reset
function reset() { 
	if (gameOver === true) {
		gameOver = false;
		$(".win").text(win);
		$(".lose").text(lose);
		sofarnum = 0;
		$(".count").text(sofarnum);
		targetnum = Math.floor((Math.random() * 101) + 19);
		$(".random").text(targetnum);
		bluegem = Math.floor((Math.random() * 12) + 1);
		greengem = Math.floor((Math.random() * 12) + 1);
		purplegem = Math.floor((Math.random() * 12) + 1);
		pinkgem = Math.floor((Math.random() * 12) + 1);
		console.log(bluegem, greengem, purplegem, pinkgem);
	}
}

//START THE GAME
reset();

//when a gem is clicked, add that value to the sofarnum, re-write to page, and check the score for win/lose
$("#bluegem").on("click", function() {
	sofarnum = parseInt(bluegem + sofarnum);
	$(".count").text(sofarnum);
	winLose();
	reset();
});
$("#greengem").on("click", function() {
	sofarnum = parseInt(greengem + sofarnum);
	$(".count").text(sofarnum);
	winLose();
	reset();
});
$("#purplegem").on("click", function() {
	sofarnum = parseInt(purplegem + sofarnum);
	$(".count").text(sofarnum);
	winLose();
	reset();
});
$("#pinkgem").on("click", function() {
	sofarnum = parseInt(pinkgem + sofarnum);
	$(".count").text(sofarnum);
	winLose();
	reset();
});


});