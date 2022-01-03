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

function mainGame(userChoice) {
	let computerChoice = generateComputerChoice()
	if (computerChoice === 'rock' && userChoice === 'paper') {
		document.getElementById('result').innerHTML = "You chose paper. Computer chose rock"
	}
	if (computerChoice === 'paper' && userChoice === 'scissors') {
		document.getElementById('result').innerHTML = "You chose paper. Computer chose rock"
	}
	if (computerChoice === 'scissors' && userChoice === 'rock') {
		document.getElementById('result').innerHTML = "You chose rock. Computer chose scissors"
	}
	if (computerChoice === 'paper' && userChoice === 'rock') {
		document.getElementById('result').innerHTML = "You chose rock. Computer chose paper"
	}
	if (computerChoice === 'scissors' && userChoice === 'paper') {
		document.getElementById('result').innerHTML = "You chose paper. Computer chose scissors"
	}
	if (computerChoice === 'rock' && userChoice === 'scissors') {
		document.getElementById('result').innerHTML = "You chose scissors. Computer chose rock"
	}
	else if(computerChoice === userChoice)
		{document.getElementById('result').innerHTML = "Its a tie game!"
	}
	
}