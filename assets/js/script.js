/**Dom Manipulators */
const buttons = document.getElementsByTagName('button');
const startGame = document.getElementById('play-game');
let r = document.getElementById('rock');
let p = document.getElementById('paper');
let s = document.getElementById('scissors');

/**  Add event listener for three buttons and for the play game button */
document.addEventListener("DOMContentLoaded", function () {

	for (let button of buttons) {
		button.addEventListener("click", function () {
			let userChoice = this.getAttribute("data-choice");
			mainGame(userChoice);
		});
		startGame.addEventListener('click', beginGame);

	}
});
/**This function is so the computer can make a random choice choice*/
function generateComputerChoice() {
	let choices = ['rock', 'paper', 'scissors'];
	let randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

/** This is the main game, Here are the possible outcomes according 
 * to the computer and user's choices in the main game.  
 */
function mainGame(userChoice) {
	let computerChoice = generateComputerChoice();
	if (computerChoice === 'rock' && userChoice === 'paper') {
		document.getElementById('message').innerHTML = "You choose paper🖐🏻 Computer choose rock👊🏻";
		userWin();
	}
	if (computerChoice === 'paper' && userChoice === 'scissors') {
		document.getElementById('message').innerHTML = "You choose scissors✌🏻 Computer choose rock👊🏻";
		userWin();
	}
	if (computerChoice === 'scissors' && userChoice === 'rock') {
		document.getElementById('message').innerHTML = "You choose rock👊🏻 Computer choose scissors .✌🏻";
		userWin();
	}
	if (computerChoice === 'paper' && userChoice === 'rock') {
		document.getElementById('message').innerHTML = "You choose rock👊🏻 Computer choose paper🖐🏻";
		computerWin();
	}
	if (computerChoice === 'scissors' && userChoice === 'paper') {
		document.getElementById('message').innerHTML = "You choose paper🖐🏻 Computer choose scissors✌🏻";
		computerWin();
	}
	if (computerChoice === 'rock' && userChoice === 'scissors') {
		document.getElementById('message').innerHTML = "You choose scissors✌🏻 Computer choose rock👊🏻";
		computerWin();
	} else if (computerChoice === userChoice) {
		document.getElementById('message').innerHTML = "Its a draw!";
		drawGame();
	}

}
/** This increments te score by one for the user.
 *  Also if the game reaches 5 score goes back to zero
 */
function userWin() {
	let userScoreDisplayed = parseInt(document.getElementById("user-score").innerText);
	document.getElementById("user-score").innerText = ++userScoreDisplayed;
	document.getElementById("result").innerHTML = 'You win!';
	if (userScoreDisplayed == 5) {
		winGame();
		r.style.display = "none";
		p.style.display = "none";
		s.style.display = "none";

	}
}
/** This increments te score by one for the computer.
 *  Also if the game reaches 5 score goes back to zero
 */
function computerWin() {
	let compScoreDisplayed = parseInt(document.getElementById("computer-score").innerText);
	document.getElementById("computer-score").innerText = ++compScoreDisplayed;
	document.getElementById("result").innerHTML = 'You Lose!';
	if (compScoreDisplayed == 5) {
		gameOver();


	}

}
/** This function includes message if the game is a draw */
function drawGame() {
	document.getElementById("result").innerHTML = '';

}

/** This function includes message the user wins and the scores go back to zero */
function winGame() {
	document.getElementById("result").innerHTML = 'Congratulations Youve won the game!🏆';
	document.getElementById("computer-score").innerText = 0;
	document.getElementById("user-score").innerText = 0;

}


/** This function includes message the user wins and the scores go back to zero */
function gameOver() {
	document.getElementById("result").innerHTML = 'You have lost the game!😟';
	document.getElementById("user-score").innerText = 0;
	document.getElementById("computer-score").innerText = 0;

}

/** This function works when the play game button is clicked.
 *  It removes the box area and play button and the game then appears */
function beginGame() {
	document.getElementById('box-area').style.display = "none";
	startGame.style.display = "none";
	r.style.display = "flex";
	p.style.display = "flex";
	s.style.display = "flex";
	document.getElementById('message').innerHTML = "Your move!";

}