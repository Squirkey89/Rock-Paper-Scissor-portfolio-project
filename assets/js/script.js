/**Dom Manipulators */
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const compScoreDisplayed = document.getElementById('computer-score');
const userScoreDisplayed = document.getElementById('user-score');
const message = document.getElementById('message')
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
		document.getElementById('message').innerHTML = "You choose paper. Computer choose rock"
		userWin()
	}
	if (computerChoice === 'paper' && userChoice === 'scissors') {
		document.getElementById('message').innerHTML = "You choose scissors. Computer choose rock"
		userWin()
	}
	if (computerChoice === 'scissors' && userChoice === 'rock') {
		document.getElementById('message').innerHTML = "You choose rock. Computer choose scissors"
		userWin()
	}
	if (computerChoice === 'paper' && userChoice === 'rock') {
		document.getElementById('message').innerHTML = "You choose rock. Computer choose paper"
		computerWin()
	}
	if (computerChoice === 'scissors' && userChoice === 'paper') {
		document.getElementById('message').innerHTML = "You choose paper. Computer choose scissors"
		computerWin()
	}
	if (computerChoice === 'rock' && userChoice === 'scissors') {
		document.getElementById('message').innerHTML = "You choose scissors. Computer choose rock"
		computerWin()
	}
	else if(computerChoice === userChoice)
		{document.getElementById('message').innerHTML = "Its a tie game!"
	}
	
}
function userWin(){
	let oldScore = parseInt(document.getElementById("user-score").innerText);
	document.getElementById("user-score").innerText = ++oldScore;	
	document.getElementById("result").innerHTML='You win!'
}
function computerWin(){
	let oldScore = parseInt(document.getElementById("computer-score").innerText);
	document.getElementById("computer-score").innerText = ++oldScore;	
	document.getElementById("result").innerHTML='You Lose'

}
let result

function drawGame(){
	 if(computerChoice === userChoice){
		result.style.display(hidden)
	}}

result.addEventListener('click', function() {
	drawGame()})