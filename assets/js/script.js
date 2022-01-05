/*jshint esversion: 6 */

/**Dom Manipulators */
const buttons = document.getElementsByTagName('button');
const compScoreDisplayed = document.getElementById('computer-score');
const userScoreDisplayed = document.getElementById('user-score');
const message = document.getElementById('message');
const results = document.getElementById('result');
const startGame = document.getElementById('play-game');
const instruction = document.getElementById('instructions');


document.addEventListener("DOMContentLoaded", function() {

for (let button of buttons) {
	button.addEventListener("click", function () {
		let userChoice = this.getAttribute("data-choice");
		mainGame(userChoice);
	});
	startGame.addEventListener('click', beginGame);

}});

function generateComputerChoice() {
	let choices = ['rock', 'paper', 'scissors'];
	let randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

function mainGame(userChoice) {
	let computerChoice = generateComputerChoice();
	if (computerChoice === 'rock' && userChoice === 'paper') {
		document.getElementById('message').innerHTML = "You choose paper. Computer choose rock";
		userWin();
	}
	if (computerChoice === 'paper' && userChoice === 'scissors') {
		document.getElementById('message').innerHTML = "You choose scissors. Computer choose rock";
		userWin();
	}
	if (computerChoice === 'scissors' && userChoice === 'rock') {
		document.getElementById('message').innerHTML = "You choose rock. Computer choose scissors";
		userWin();
	}
	if (computerChoice === 'paper' && userChoice === 'rock') {
		document.getElementById('message').innerHTML = "You choose rock. Computer choose paper";
		computerWin();
	}
	if (computerChoice === 'scissors' && userChoice === 'paper') {
		document.getElementById('message').innerHTML = "You choose paper. Computer choose scissors";
		computerWin();
	}
	if (computerChoice === 'rock' && userChoice === 'scissors') {
		document.getElementById('message').innerHTML = "You choose scissors. Computer choose rock";
		computerWin();
	} else if (computerChoice === userChoice) {
		document.getElementById('message').innerHTML = "Its a draw!";
		drawGame();
	}

}

function userWin() {
	let userScoreDisplayed = parseInt(document.getElementById("user-score").innerText);
	document.getElementById("user-score").innerText = ++userScoreDisplayed;
	document.getElementById("result").innerHTML = 'You win!';
	if (userScoreDisplayed == 5) {
		winGame();
	}
}

function computerWin() {
	let compScoreDisplayed = parseInt(document.getElementById("computer-score").innerText);
	document.getElementById("computer-score").innerText = ++compScoreDisplayed;
	document.getElementById("result").innerHTML = 'You Lose!';
	if (compScoreDisplayed == 5) {
		gameOver();
	}

}

function drawGame() {
	document.getElementById("result").innerHTML = '';

}

function winGame() {
	document.getElementById("result").innerHTML = 'Congratulations Youve won the game!';
	document.getElementById("computer-score").innerText = 0;
	document.getElementById("user-score").innerText = 0;
}



function gameOver() {
	document.getElementById("result").innerHTML = 'You have lost the game!';
	document.getElementById("user-score").innerText = 0;
	document.getElementById("computer-score").innerText = 0;
}

function beginGame() {
	let r = document.getElementById('rock');
	let p = document.getElementById('paper');
	let s = document.getElementById('scissors');
	instruction.style.display = "none";
	startGame.style.display = "none";
	r.style.display = "flex";
	p.style.display = "flex";
	s.style.display = "flex";
	document.getElementById('message').innerHTML ="Your move!"

}
