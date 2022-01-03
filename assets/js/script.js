/**Dom Manipulators */
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const compScoreDisplayed = document.getElementById('computer-score');
const userScoreDisplayed = document.getElementById('user-score');
const results = document.getElementById('result')
const buttons = document.getElementsByTagName("button");


for (let button of buttons) {
	button.addEventListener("click", function () {
		let userChoice = this.getAttribute("data-choice");
		mainGame(userChoice);
	});
}

function generateComputerChoice() {
	let choices = ['rock', 'paper', 'scissors']
	let randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

